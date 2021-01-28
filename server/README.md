# Next Gen Limitless Server

This repo contains the code for the back-end server files for the [Next Gen Limitless](https://github.com/reubennn/nextgen-limitless) fullstack website. This is so we can automatically deploy our server to a hosting service capable of running [Node.js](https://nodejs.org/en/) applications, such as [Heroku](https://www.heroku.com). The back-end utilises [Express.js](https://expressjs.com/) to act as a server API which queries the database from [MongoDB](https://www.mongodb.com/).

## An Ongoing Project

Currently, this is a simple blog website. However, this is an ongoing project with the aim to add further features down the line, as well as convert it a full website with the blog section only one part of it.

## Libraries Used

Popular libraries used include:

- [Express.js](https://expressjs.com/) to provide the back-end web application framework.
- [nodemon](https://nodemon.io/) to reload the server automatically after any saved changes.
- [body-parser](https://www.npmjs.com/package/body-parser) middleware to parse request bodies.
- [helmet](https://helmetjs.github.io/) to help secure the Express app by setting various HTTP headers.
- [MongoDB Client](https://mongodb.github.io/node-mongodb-native/) to interact with MongoDB using native Node.js driver.
- [Luxon.js](https://moment.github.io/luxon/) to quickly and efficiently format dates.
- [dotenv](https://www.npmjs.com/package/dotenv) to load confidential information as environment variables into process.env, to keep it hidden from Git.

## Getting Started

### Setting up Environment Variables

The URI, database name and collection names have not been provided in Git due to confidentiality of data. These would be stored in `secrets.env` located in `config/`. You can find an example file containing mock keys-value pairs in `secrets.env.example`. You have two options to populate the data:

 1. Replace `MONGO_URI`, `DB_NAME`, `ARTICLES` and `AUTHORS`, `COMMENTS` with the URI, database name and collection names, respectively.
 2. Create a file called `secrets.env` inside `config/` and populate it with the appropriate data:

 ```env
MONGO_URI=mongodb+srv://<user>:<password>@<database>?retryWrites=true&w=majority
DB_NAME=database-name
ARTICLES=article-collection
AUTHORS=author-collection
COMMENTS=comments-collection
PORT=9000
 ```

### Integrating with MongoDB

 The data is hosted on [MongoDB Atlas cloud](https://www.mongodb.com/) using [MongoDB Client Node.js Driver](https://mongodb.github.io/node-mongodb-native/).

 Inside the `server/` directory, files have been provided to set-up the database with initial data. Initial data can be found in `articles.js` and `comments.js`; the files to import the content into the database are `addArticlesToDB.js` and `addCommentsToDB.js`.

 Simply run `npm run db-setup` to upload all data as documents to MongoDB.

 Alternatively, you can upload just the articles, or just the comments using `npm run db-setup:articles` or `npm run db-setup:comments`, respectively.

### Running the React App

For information on running the client, please see the [Next Gen Limitless](https://github.com/reubennn/nextgen-limitless) repo.

### Running the Express.js Server

Simply run `npm run server`. The server will run on [http://localhost:9000](http://localhost:9000).

#### Running Express.js Server Without Client react-dev-server

We can serve the static files by bundling the files to the server `dist/` directory using webpack to generate a production build.

For information on generating the production build, please see the [Next Gen Limitless](https://github.com/reubennn/nextgen-limitless) repo.

## Other

### Linting

The server uses its own linting configuration, achieved through [ESLint](https://eslint.org/). This keeps the code clean, written correctly and ensures it uses industry best practices.

The server uses rules extended from:

- eslint:recommended
- prettier
- google

### Transpiling

Both server and client use their own transpiling configuration, achieved through [Babel](https://babeljs.io/), to use next generation JavaScript language features.

## Original Content from LinkedIn Learning Course

- Original content was based off of the LinkedIn Learning course [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site/) by [Shaun Wassell](https://www.linkedin.com/in/shaun-wassell/).
- Extensive additions have been made to the project, branching out from the original content and introducing a significant amount of new features and functions.
