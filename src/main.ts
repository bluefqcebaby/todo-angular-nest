import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:1234', 'https://bluefqcebaby.github.io'],
  });
  await app.listen(process.env.PORT || 3000, () => {
    // console.log(`app started at http://localhost:3000`);
  });
}
bootstrap();
