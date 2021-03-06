import { Component, Input, OnInit } from '@angular/core';
import {ITodo} from "../models/ITodo";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  @Input() title: string;
  @Input() id: number;
  @Input() todos: ITodo[];
  checked = false;
}
