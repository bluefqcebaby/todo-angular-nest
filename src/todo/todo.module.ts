import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { Projects } from 'src/entities/project.entity';
import { Todos } from 'src/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Projects, Todos])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
