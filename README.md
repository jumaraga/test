## This proyect is part of selection process at Full TimeForce
### Tools
This Proyect implements th following libraries and frameworks:
  - Frontend:
    - React.js
    - Webpack
    - babel 
    - Tailwindcss
    - postcss
  - Backend
    - Nest.js (server core)
    - Axios (API calls)
    - Octokit ( Integration with GitHub API)
    - Dotenv (Environment variables)
  - Good Practices 
    - Eslint (Linter)
    - Prettier (Formatter) 
## Instructions to run the program

1. First clone these repository
2. if you do not have Node intall it follow the next link https://nodejs.org/en/download/ 
3. Install all dependencies with npm 
4. Create a .env copy and paste the variables in the env file to the .env file
5. Create a new personal token to use the GitHub API (follow this link https://github.com/settings/tokens/new, then enter to your account, then copy and paste the generated token in the variable GITHUB_TOKEN) 
6. in your terminal move to the proyect directory with the command cd follow by the direction of the directory and run the script,on  your terminal: "npm run frontend:build", it will create the statics files for the client and user interface.
7. located at the proyect directory run the script:"npm run build", thisd will create a directory named dist that contain the code for the rest API.
8. install nodemon on your machine with "npm install -g nodemon"
9. run the script "npm nodemon dist/main.js" on your terminal and in the proyect directory
10. to enter to the proyect in your browser enter to the url localhost:3001