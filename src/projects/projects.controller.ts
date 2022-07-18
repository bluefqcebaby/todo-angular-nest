import { ProjectsService } from './projects.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SingleProject } from './models/project.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Post()
  createProject(@Body() project: SingleProject) {
    return this.projectService.createProject(project);
  }

  @Get()
  getAllProjects() {
    return this.projectService.getProjects();
  }
}
