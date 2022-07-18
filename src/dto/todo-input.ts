import { Field, InputType, Int } from '@nestjs/graphql';
import { Projects } from 'src/entities/project.entity';

@InputType()
export class ITodoAddInput {
  @Field()
  text: string;

  @Field((type) => Int)
  project: Projects;
}
