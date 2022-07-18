import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProjectsController } from './projects.controller';
import { Todo } from './../todo/models/todo.entity';
import { ProjectsService } from './projects.service';
import { Project } from './models/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Todo])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
