import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './global/config/type-orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
