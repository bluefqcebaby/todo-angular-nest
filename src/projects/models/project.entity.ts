import { Todo } from './../../todo/models/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Todo, (task) => task.project, { nullable: true })
  todos: Todo[];
}
