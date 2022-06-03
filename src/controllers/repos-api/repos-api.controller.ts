import { Controller, Get } from '@nestjs/common';
import { ProductService } from 'src/services/githubApi.service';
@Controller('repos-api')
export class ReposApiController {
   constructor(private Commitservice: ProductService) { }
   @Get('/')
   commits() {
      return this.Commitservice.findAll();
   }

}
