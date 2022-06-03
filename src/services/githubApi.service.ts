import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class ProductService {
   async findAll() {
      // const commits = await fetch(`${process.env.GITHUB_API_URL}/repos/jumaraga/commits`, {
      //    method: 'GET',
      //    headers: {
      //       "Content-Type": "Application",
      //       "Accept": "*/*"
      //    }
      // })
      console.log(process.env.GITHUB_API_URL)
      try {
         const commits = await axios.get(`${process.env.GITHUB_API_URL}repos/jumaraga/Todo-App/commits`)
         console.log(commits.data)
         return commits.data
      } catch (e) {
         console.log(e)
      }

   }
}
