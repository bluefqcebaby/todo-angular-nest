import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoAddInput } from 'src/dto/todo-input';
import { ITodoUpdateInput } from 'src/dto/todo-input-update';
import { Todos } from 'src/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos) private todoRepository: Repository<Todos>,
  ) {}

  async addTodo(todoInput: ITodoAddInput): Promise<Todos> {
    return this.todoRepository.save(todoInput);
  }

  async updateTodo(todoInput: ITodoUpdateInput): Promise<ITodoUpdateInput> {
    return this.todoRepository.save(todoInput);
  }
}
