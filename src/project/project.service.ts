import { IProjectInput } from './../dto/project-input';
import { Projects } from './../entities/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Projects)
    private projectsRepository: Repository<Projects>,
  ) {}

  async getAllProjects(): Promise<Projects[]> {
    return this.projectsRepository.find({ relations: ['todos'] });
  }

  async addProject(projectInput: IProjectInput): Promise<Projects> {
    return this.projectsRepository.save(projectInput);
  }
}
