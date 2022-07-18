import { Projects } from './project.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Todos {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  text?: string;

  @Column({ default: false })
  @Field({ defaultValue: false })
  isCompleted?: boolean;

  @ManyToOne((type) => Projects, (projects) => projects.todos)
  @Field((type) => Int)
  project: Projects;
}
