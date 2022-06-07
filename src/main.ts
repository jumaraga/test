import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'
import { createTokenAuth } from '@octokit/auth-token'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
config()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'build'))
  app.setViewEngine('html');
  app.enableCors()
  await app.listen(3001);

}
bootstrap();

// async function getToken() {
//   const auth = createTokenAuth(`${process.env.GUTHUB_TOKEN}`);
//   return await auth();

// };
// const token = getToken()
// export { token }