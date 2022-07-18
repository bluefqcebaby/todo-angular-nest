import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8888;
  await app.listen(8888, () => {
    console.log(`app started at ${port} port`);
  });
}

bootstrap();
