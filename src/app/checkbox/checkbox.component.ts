import { Component, Input, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  @Input() text: string;
  @Input() id: number;
  @Input() isCompleted: boolean;

  checked: boolean;
  isDisabled = false;
  ngOnInit(): void {
    this.checked = this.isCompleted;
  }

  onChange(): void {
    this.isDisabled = true;
    this.apollo
      .mutate({
        mutation: gql`
          mutation UpdateTodo($projectId: Int!, $isCompleted: Boolean!) {
            updateTodo(todoInput: { id: $projectId, isCompleted: $isCompleted }){
              id
            }

          }
        `,
        variables: {
          projectId: this.id,
          isCompleted: !this.checked,
        },
      })
      .subscribe((res) => {
        if (!res.errors) {
          this.checked = !this.checked;
          this.isDisabled = false;
        }
      });
  }
}
