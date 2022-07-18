import { SingleTodo } from '../../todo/models/todo.interface';

export interface SingleProject {
  id: number;
  title: string;
  todoList?: SingleTodo[];
}
