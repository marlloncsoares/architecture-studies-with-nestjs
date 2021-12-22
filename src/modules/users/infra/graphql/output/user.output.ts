import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class UserOutput {
  @Field(() => String, { nullable: true })
  name?: string;
}
