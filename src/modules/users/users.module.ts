import { Module } from '@nestjs/common';
import { CreateUserService } from '@users/services';
import {
  CreateUserResolver,
  GetUserResolver,
} from '@users/presentation/resolvers';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from '@users/infra/db/mongodb/schemas';
import { ConnectionsMongoDB } from '@config/enums';
import { UserController } from '@users/presentation/controllers';
import { CreateUserMongoDBRepository } from '@users/infra/db/mongodb/repository';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Users.name,
          schema: UsersSchema,
        },
      ],
      ConnectionsMongoDB.estudos,
    ),
  ],
  controllers: [UserController],
  providers: [
    CreateUserService,
    GetUserResolver,
    CreateUserResolver,
    CreateUserMongoDBRepository,
  ],
})
export default class UsersModule {}
