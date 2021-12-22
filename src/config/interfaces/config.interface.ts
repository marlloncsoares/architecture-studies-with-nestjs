export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  throttler: ThrottlerConfig;
  graphql: GraphqlConfig;
  mongodb: MongoDBConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface ThrottlerConfig {
  ttl: number;
  limit: number;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  sortSchema: boolean;
}

export interface MongoDBConfig {
  estudos: {
    uri: string;
    connectionName: string;
  };
}
