import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoInput } from 'src/dto/todo-input';
import { Todos } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos) private todoRepository: Repository<Todos>,
  ) {}

  async addOrUpdateTodo(todoInput: ITodoInput): Promise<Todos> {
    return this.todoRepository.save(todoInput);
  }
}
