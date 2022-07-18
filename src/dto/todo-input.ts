import { Field, InputType, Int } from '@nestjs/graphql';
import { Projects } from 'src/entities/project.entity';

@InputType()
export class ITodoInput {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field()
  text: string;

  @Field({ defaultValue: false })
  isCompleted?: boolean;

  @Field((type) => Int)
  project: Projects;
}
