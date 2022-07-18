import { IProjectInput } from './../dto/project-input';
import { Projects } from './../entities/project.entity';
import { ProjectService } from './project.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver((of) => Projects)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query((types) => [Projects])
  async projects(): Promise<Projects[]> {
    return this.projectService.getAllProjects();
  }

  @Mutation((types) => Projects)
  async createProject(
    @Args('projectInput') projectInput: IProjectInput,
  ): Promise<Projects> {
    return this.projectService.addProject(projectInput);
  }
}
