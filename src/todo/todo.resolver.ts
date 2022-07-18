import { ITodoInput } from 'src/dto/todo-input';
import { TodoService } from './todo.service';
import { Todos } from './../entities/todo.entity';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver((of) => Todos)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation((types) => Todos)
  async addOrUpdateTodo(
    @Args('todoInput') todoInput: ITodoInput,
  ): Promise<Todos> {
    return this.todoService.addOrUpdateTodo(todoInput);
  }
}
