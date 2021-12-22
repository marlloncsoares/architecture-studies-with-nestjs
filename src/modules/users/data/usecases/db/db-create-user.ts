import { CreateUserInput, CreateUserOutput } from '@users/domain/protocols';
import { CreateUser } from '@users/domain/usecases';
import { CreateUserRepositoryContract } from '@users/data/protocols/repository';

export class DbCreateUser implements CreateUser {
  constructor(private readonly userRepository: CreateUserRepositoryContract) {}

  async create(user: CreateUserInput): Promise<CreateUserOutput> {
    return this.userRepository.create(user);
  }
}
