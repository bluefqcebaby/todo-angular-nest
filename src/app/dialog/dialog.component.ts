import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { UpdateCardsService } from '../services/update-cards.service';
import { MatDialogRef } from '@angular/material/dialog';

interface ISmallProject {
  id: number;
  title: string;
}

interface Response {
  projects: ISmallProject[];
}

interface AddProjectResponse {
  createProject: {
    id: number
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apollo: Apollo,
    private updateCards: UpdateCardsService,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  loading = true;
  myForm: FormGroup;
  projects: ISmallProject[] = [];

  public refresh() {
    this.updateCards.setRefresh(true);
  }

  initForm(): void {
    this.myForm = this.formBuilder.group({
      todoText: new FormControl('', [Validators.required, Validators.min(3)]),
      project: new FormControl(null, Validators.required),
      newProject: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.apollo
      .watchQuery<Response>({
        query: gql`
          {
            projects {
              id
              title
            }
          }
        `,
        fetchPolicy: "no-cache",
      })
      .valueChanges.subscribe((result) => {
        const addNew = {
          id: 999,
          title: 'Новый проект',
        };
        this.loading = result.loading;
        this.projects = [addNew, ...result.data.projects];
        this.initForm();
      });
  }
  ngOnDestroy() {
    this.myForm.reset()
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      this.loading = true;
      const { todoText, project, newProject } = this.myForm.value;
      console.log(newProject);
      if (newProject === null) {
        this.addTodoMutaion(todoText, project);
      } else {
        this.apollo
          .mutate<AddProjectResponse>({
            mutation: gql`
              mutation CreateProject($text: String!) {
                createProject(projectInput: { title: $text }) {
                  id
                }
              }
            `,
            variables: {
              text: newProject,
            },
          })
          .subscribe((res) => {
            console.log(res);
            this.addTodoMutaion(todoText ,res.data?.createProject.id!)
          });
      }
    }
  }

  addTodoMutaion(todoText: string, projectId: number) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation AddTodo($text: String!, $id: Int!) {
            addTodo(todoInput: { text: $text, project: $id }) {
              id
            }
          }
        `,
        variables: {
          text: todoText,
          id: projectId,
        },
      })
      .subscribe(() => {
        this.refresh();
        this.loading = false;
        this.myForm.reset()
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
