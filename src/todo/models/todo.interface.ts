import { SingleProject } from './../../projects/models/project.interface';


export interface SingleTodo {
  id: number;
  text: string;
  project?: SingleProject;
  isComleted: boolean;
}
