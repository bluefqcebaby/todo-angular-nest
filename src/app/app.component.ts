import { ITodo } from './models/ITodo';
import { IProject } from './models/IProjects';
import { DialogComponent } from './dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apollo, gql } from 'apollo-angular';
import {Observable, Subscription, map} from 'rxjs';
import { UpdateCardsService } from './services/update-cards.service';

interface Response {
  projects: IProject[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private apollo: Apollo,
    private updateCards: UpdateCardsService
  ) {}

  loading = true;
  private querySubscription: Subscription;
  projects: IProject[];

  openDialog() {
    this.dialog.open(DialogComponent, {
      maxWidth: '450px',
    });
  }
  ngOnInit() {
    this.updateCards.getRefresh().subscribe((value: boolean) => {
      if (value) {
        this.loading = true;
        this.querySubscription = this.apollo.watchQuery<Response>({
            fetchPolicy: "no-cache",
            query: gql`
              {
                projects {
                  id
                  title
                  todos {
                    id
                    text
                    isCompleted
                  }
                }
              }
            `,
          }).valueChanges.subscribe(({data, loading}) => {
            this.loading = loading;
            this.projects = data.projects;
          })
      }
    });
  }

}
