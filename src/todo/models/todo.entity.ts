import { Project } from './../../projects/models/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  isCompleted: boolean;

  @ManyToOne(() => Project, (project) => project.todos, { cascade: true })
  project: Project;
}
