import { Injectable } from '@nestjs/common';
import { Octokit, App } from "octokit";
@Injectable()
export class ProductService {
   async findAll() {
      const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` })
      const data = await octokit.request("GET /repos/jumaraga/test/commits")
      return data
   }
}
