import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ITodoUpdateInput {
  @Field((type) => Int)
  id: number;

  @Field()
  isCompleted: boolean;
}
