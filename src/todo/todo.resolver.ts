import { ITodoAddInput } from 'src/dto/todo-input';
import { TodoService } from './todo.service';
import { Todos } from './../entities/todo.entity';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ITodoUpdateInput } from 'src/dto/todo-input-update';

@Resolver((of) => Todos)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation((returns) => Todos)
  async addTodo(@Args('todoInput') todoInput: ITodoAddInput): Promise<Todos> {
    return this.todoService.addTodo(todoInput);
  }

  @Mutation((returns) => Todos)
  async updateTodo(
    @Args('todoInput') todoInput: ITodoUpdateInput,
  ): Promise<ITodoUpdateInput> {
    return this.todoService.updateTodo(todoInput);
  }
}
