import { Injectable } from '@nestjs/common';
import { Octokit, App } from "octokit";
import axios from 'axios';
import { Auth } from './authenication/auth.service';
// import { token } from 'src/main';
// import { token } from 'src/main';
@Injectable()
export class ProductService {
   async findAll() {
      console.log(process.env.GITHUB_API_URL)
      // try {
      //    const commits = await axios.get(`${process.env.GITHUB_API_URL}repos/jumaraga/Todo-App/commits`, {})
      //    // console.log(commits.data)
      //    console.log('llama')
      //    return commits.data.map((v) => {
      //       return { committer: { ...v.committer }, message: v.message }
      //    })
      // } catch (e) {
      //    console.log(e)
      //    return { message: 'fuck' }
      // }
      // console.log(await token)
      const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` })
      const { data: { login } } = await octokit.rest.users.getAuthenticated()
      const data = await octokit.request("GET /repos/jumaraga/Todo-App/commits")
      return data
   }
}
