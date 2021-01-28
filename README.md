# Fullstack React Application

A complete web application integrating the MERN stack: [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React.js](https://reactjs.org/), [Node.js](https://nodejs.org/en/).

This project contains the code for both front-end client files and back-end server files. The main reason was easier tracking of site-wide changes that affected the client and server simultaneously. The back-end utilises Express.js to act as a server API which queries the database from MongoDB. The front-end incorporates React.js to display the user interface which renders content that has been fetched using the server API.

## An Ongoing Project

Currently, this is a simple blog website. However, this is an ongoing project with the aim to add further features down the line, as well as convert it a full website with the blog section only one part of it.

## Server

Back-end server API used to interact with the database

Navigate to the directory using command `cd server/`.

### Libraries Used (Server)

Popular libraries used include:

- [Express.js](https://expressjs.com/) to provide the back-end web application framework.
- [nodemon](https://nodemon.io/) to reload the server automatically after any saved changes.
- [body-parser](https://www.npmjs.com/package/body-parser) middleware to parse request bodies.
- [helmet](https://helmetjs.github.io/) to help secure the Express app by setting various HTTP headers.
- [MongoDB Client](https://mongodb.github.io/node-mongodb-native/) to interact with MongoDB using native Node.js driver.
- [Luxon.js](https://moment.github.io/luxon/) to quickly and efficiently format dates.
- [dotenv](https://www.npmjs.com/package/dotenv) to load confidential information as environment variables into process.env, to keep it hidden from Git.

## Client

Front-end application using [React](https://reactjs.org/). This is where the user interface is built. It communicates with the server API to display content from the database.

Navigate to the directory using command `cd client/`.

### Libraries Used (Client)

Popular libraries used include:

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) to use React features without having to write classes.
- [React Router](https://reactrouter.com/) for navigating between the various pages.
- [Redux](https://redux.js.org/) for global state management.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) to act as middleware to write async logic to interact with the Redux store.
- [styled-components](https://styled-components.com/) for a modern approach to styling, using reusable components, and implementing dynamic styling.
- [Webpack](https://webpack.js.org/) for bundling our React App together, to run either the development environment or for our production build.
- [Dotenv Webpack](https://www.npmjs.com/package/dotenv-webpack) to add dotenv plugin to webpack, so we can keep our confidential information hidden from Git.
- { [_.debounce](https://lodash.com/docs/4.17.15#debounce) } from [lodash](https://lodash.com/): function to limit calls during window resizing.
- [Luxon.js](https://moment.github.io/luxon/) to quickly and efficiently format dates.

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

To run the app, there are two choices:

1. Run the Express.js server alongside the client React development server. You will access the app through the client UI on `port 3000`, which will send fetch requests to the server API to load the content. This option is great for debugging and development as it contains Hot Module Replacement, so the page does not need to be refreshed when the code is updated.
2. Bundle the production build into the `dist/` directory of the server. This directory acts as static files which can be served by the server. Therefore, we can access the whole app on `port 9000`.

### Running the Express.js Server

In `server/`, simply run `npm run server`. The server will run on [http://localhost:9000](http://localhost:9000).

Alternatively, from the project root folder, simply run `npm run server`;

#### Running Express.js Server Without Client react-dev-server

*If running the server alongside React development server, skip this section.*

We can serve the static files by bundling the files to the server `dist/` directory using webpack to generate a production build.

To do this, we can run the following command from the either the `server/` or `client` directory: `npm run build`

Either directory it is ran it, it runs the command from the client directory which is where the webpack configurations files and the files we need to bundle are located. This command copies index.html and favicon.ico to `dist/` as well as bundles the client React app into `bundle.js`.

### Running the React Application Development Server

In `client/`, simply run `npm run dev`. The dev-server will run on [http://localhost:3000](http://localhost:3000). 

Alternatively, from the project root folder, simply run `npm run client`;

The development server supports [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/), which allows the app to update without needing a full refresh.

*Note: You will need to run the Express server API, otherwise the resources from the database cannot be loaded.*

## Other

### Styling

Base styling to reset and normalize the elements executed with [SASS/SCSS](https://sass-lang.com/).

Styling of React Components fulfilled using [styled-components](https://styled-components.com/). styled-components provides the application the power to display content based on the Component props as well as re-use styling quickly and efficiently.

### Linting

Both server and client use their own linting configuration, achieved through [ESLint](https://eslint.org/). This keeps the code clean, written correctly and ensures it uses industry best practices.

The client uses rules extended from:

- eslint:recommended
- prettier
- google
- prettier/react
- plugin:react/recommended

The server uses rules extended from:

- eslint:recommended
- prettier
- google

### Transpiling

Both server and client use their own transpiling configuration, achieved through [Babel](https://babeljs.io/), to use next generation JavaScript language features.

## Original Content from LinkedIn Learning Course

- Original content was based off of the LinkedIn Learning course [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site/) by [Shaun Wassell](https://www.linkedin.com/in/shaun-wassell/).
- Extensive additions have been made to the project, branching out from the original content and introducing a significant amount of new features and functions.
