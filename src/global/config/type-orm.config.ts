import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'nestjs_study',
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  logging: true,
  timezone: 'UTC',
};
