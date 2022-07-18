import { Project } from './../projects/models/project.entity';
import { Todo } from './models/todo.entity';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Project])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
