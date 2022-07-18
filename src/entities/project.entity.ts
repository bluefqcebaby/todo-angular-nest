import { Todos } from './todo.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Projects {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @OneToMany((type) => Todos, (todo) => todo.project)
  @Field((type) => [Todos], { nullable: 'items' })
  todos: Todos[];
}
