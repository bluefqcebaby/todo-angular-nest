import { Project } from './../projects/models/project.entity';
import { SingleTodo } from './models/todo.interface';
import { Todo } from './models/todo.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,

    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  createTodo(todo: SingleTodo) {
    return this.todoRepository.save(todo);
  }
}
