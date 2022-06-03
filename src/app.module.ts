import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposApiController } from './controllers/repos-api/repos-api.controller';
import { ProductService } from './services/githubApi.service';

@Module({
  imports: [],
  controllers: [AppController, ReposApiController],
  providers: [AppService, ProductService],
})
export class AppModule { }
