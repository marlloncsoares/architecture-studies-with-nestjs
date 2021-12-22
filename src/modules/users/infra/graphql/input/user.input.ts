import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  gender: string;

  @Field(() => String, { nullable: false })
  birthDate: Date;

  @Field(() => String, { nullable: false })
  cpf: string;
}
