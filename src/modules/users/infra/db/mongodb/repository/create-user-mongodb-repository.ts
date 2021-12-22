import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from '@users/infra/db/mongodb/schemas';
import { CreateUserRepositoryContract } from '@modules/users/data/protocols';
import { CreateUserInput, CreateUserOutput } from '@modules/users/domain';

@Injectable()
export default class CreateUserMongoDBRepository
  implements CreateUserRepositoryContract
{
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
  ) {}

  async create(data: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userModel.create(data);
    return {
      status: Boolean(user),
    };
  }
}
