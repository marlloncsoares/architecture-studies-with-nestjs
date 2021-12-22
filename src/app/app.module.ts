import { ConnectionsMongoDB } from '@config/enums';
import { UsersModule } from '@modules/users';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphqlConfig, MongoDBConfig } from '@config/interfaces';
import config from '@config/config';

@Module({
  imports: [
    UsersModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),

    // Graphql Config
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile: './src/gql/schema.graphql',
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),

    // Mongoose config
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      connectionName: ConnectionsMongoDB.estudos,
      useFactory: async (configService: ConfigService) => {
        const configMongoDB = configService.get<MongoDBConfig>('mongodb');
        const database = configMongoDB.estudos;
        return {
          uri: database.uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
