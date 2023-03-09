import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import { setNestApp } from './global/config/nest-app.config';

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create(AppModule);
  setNestApp(app);

  await app.listen(10000);
}
bootstrap();
