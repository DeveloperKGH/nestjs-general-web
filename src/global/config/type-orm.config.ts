import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'sample',
  entities: [__dirname + '/../../**/*.model.{js,ts}'],
  logging: true,
  timezone: '+00:00',
  namingStrategy: new SnakeNamingStrategy(),
};
