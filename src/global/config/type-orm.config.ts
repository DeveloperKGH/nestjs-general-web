import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'sample',
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  logging: true,
  timezone: '+00:00',
};
