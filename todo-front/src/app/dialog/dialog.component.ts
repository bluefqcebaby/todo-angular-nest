import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { UpdateCardsService } from '../services/update-cards.service';
import {MatDialogRef} from "@angular/material/dialog";

interface ISmallProject {
  id: number;
  title: string;
}

interface Response {
  projects: ISmallProject[];
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
  projects: ISmallProject[];

  public refresh() {
    this.updateCards.setRefresh(true);
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
      })
      .valueChanges.subscribe((result) => {
        this.loading = result.loading;
        this.projects = result.data.projects;
        this.initForm();
      });
  }

  initForm(): void {
    this.myForm = this.formBuilder.group({
      todoText: new FormControl('', [Validators.required, Validators.min(3)]),
      project: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      this.loading = true;
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
            text: this.myForm.value.todoText,
            id: this.myForm.value.project,
          },
        })
        .subscribe((res) => {
          this.refresh();
          this.loading = false;
        });
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
