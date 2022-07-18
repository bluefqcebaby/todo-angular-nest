import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IProjectInput {
  @Field()
  title: string;
}
