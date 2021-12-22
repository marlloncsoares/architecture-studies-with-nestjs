import { ConnectionsMongoDB } from './enums';
import { Config } from './interfaces';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  throttler: {
    ttl: 60,
    limit: 100,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    sortSchema: false,
  },

  mongodb: {
    estudos: {
      // uri: `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
      // uri: 'mongodb://marllon:123456@localhost:27027/estudos',
      // uri: process.env.MONGODB_ESTUDOS_URI,
      uri: 'mongodb://marllon:123456@localhost:27027/estudos',
      connectionName: ConnectionsMongoDB.estudos,
    },
  },
};

export default (): Config => config;
