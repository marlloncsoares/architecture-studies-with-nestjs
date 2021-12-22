import { UserOutput } from '@users/infra/graphql/output';
import { Query, Resolver } from '@nestjs/graphql';
import { CreateUserService } from '@users/services';

@Resolver()
export default class GetUserResolver {
  constructor(private readonly createUserService: CreateUserService) {}

  @Query(() => UserOutput)
  async getUser(): Promise<UserOutput> {
    return {
      name: 'John Doe',
    };
  }
}
