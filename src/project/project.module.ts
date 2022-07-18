import { Projects } from './../entities/project.entity';
import { Todos } from './../entities/todo.entity';
import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Projects, Todos])],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
