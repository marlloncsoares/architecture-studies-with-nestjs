import { UserInput } from '@users/infra/graphql/input';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserService } from '@modules/users/presentation/services';

@Resolver()
export default class CreateUserResolver {
  constructor(private readonly createUserService: CreateUserService) {}

  @Mutation(() => Boolean)
  async createUser(@Args('input') input: UserInput) {
    return this.createUserService.create(input);
  }
}
