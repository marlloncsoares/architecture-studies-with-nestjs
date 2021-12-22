import { CreateUserInput, CreateUserOutput } from '@users/domain/protocols';

export default interface CreateUser {
  create: (user: CreateUserInput) => Promise<CreateUserOutput>;
}
