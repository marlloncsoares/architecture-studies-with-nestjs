import { Injectable } from '@nestjs/common';
import { DbCreateUser } from '@users/data/usecases/db';
import { CreateUserMongoDBRepository } from '@users/infra/db/mongodb/repository';
import { CreateUserInput } from '@users/domain/protocols/input';

@Injectable()
export default class CreateUserService {
  private userRepository: DbCreateUser;

  constructor(private readonly mongodb: CreateUserMongoDBRepository) {}

  async create(data: CreateUserInput): Promise<boolean> {
    this.userRepository = new DbCreateUser(this.mongodb);
    this.userRepository.create(data);
    return true;
  }
}
