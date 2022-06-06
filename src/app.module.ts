import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposApiController } from './controllers/repos-api/repos-api.controller';
import { ProductService } from './services/githubApi.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  })],
  controllers: [AppController, ReposApiController],
  providers: [AppService, ProductService],
})
export class AppModule { }
