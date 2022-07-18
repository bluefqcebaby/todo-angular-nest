import { SingleProject } from './models/project.interface';
import { Project } from './models/project.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepo: Repository<Project>,
  ) {}

  createProject(project: SingleProject) {
    return this.projectsRepo.save(project);
  }

  getProjects() {
    return this.projectsRepo.find({ relations: ['todos'] });
  }
}
