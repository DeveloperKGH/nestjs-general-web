import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './global/config/type-orm.config';
import { MemberModule } from './member/member.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), MemberModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
