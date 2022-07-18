import { SingleTodo } from './models/todo.interface';
import { TodoService } from './todo.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() todo: SingleTodo) {
    return this.todoService.createTodo(todo);
  }
}
