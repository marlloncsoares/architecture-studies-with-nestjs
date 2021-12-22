import { CreateUserInput, CreateUserOutput } from '@modules/users';

export default interface CreateUserRepositoryContract {
  create: (data: CreateUserInput) => Promise<CreateUserOutput>;
}
