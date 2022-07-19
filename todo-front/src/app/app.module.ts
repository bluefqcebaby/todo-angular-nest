import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { TodoCardComponent } from './todo-card/todo-card.component';


@NgModule({
  declarations: [AppComponent, TodoCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
