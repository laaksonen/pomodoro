# React Redux Simple Starter

A simple boilerplate to get you up and running quickly with **React** and
**Redux**. This boilerplate leverages webpack to provide a powerful build
system, provides hot reloading, routing, Sass support, unit testing, linting,
and more. The goal of this project is provide a **robust** and **scalable**
structure on which to build on.

## Table of Contents
1. [Features](#features)
1. [Requirements](#requirements)
1. [Getting Started](#getting-started)
1. [Application Structure](#application-structure)
1. [Deployment](#deployment)
1. [Contributing](#contributing)
1. [License](#license)

## Features
| **Feature** | **Description** |
| ---------|-----------------|
| [React](https://facebook.github.io/react/) | View |
| [React Router](https://github.com/reactjs/react-router) | Routing |
| [Redux](http://redux.js.org/) | Client-side cache |
| [lodash](https://lodash.com/) | Utility |
| [Babel](https://babeljs.io/) | JavaScript compiler |
| [Webpack](https://webpack.github.io/) | Build system |
| [Express](http://expressjs.com/) | Development server |
| [Mocha](https://mochajs.org/) | Testing |
| [ESLint](http://eslint.org/) | Linting |

## Requirements
* [Node.js 6.0+](http://nodejs.org)

## Getting Started
```bash
$ git clone https://github.com/laaksonen/react-redux-simple-starter.git
$ cd react-redux-simple-starter
$ npm install
$ npm start
```
You can now navigate to http://localhost:3000 in your browser and you should
find the application running.

While developing, you will probably mostly rely on ``npm start``; however, there
are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves application with HMR enabled at `localhost:3000`.|
|`dev`|Same as `npm start`.|
|`prod`|Serves compiled application from disk with HMR disabled at `localhost:3000`.|
|`lint`|Lint all `.js` files.|
|`test`|Runs unit tests.|
|`test:dev`|Runs unit tests and watches for changes to re-run tests.|
|`compile`|Compiles the application to `~/static/dist`.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|

## Application Structure
The aim is to mostly group functionality by feature rather than by file type. This
is very useful when building scalable applications. All new features are grouped
together in the modules folder.
```
.
├── bin                       # Start scripts
├── config                    # Build related configuration
├── server                    # Express server with webpack middleware
├── src                       # Application source code
│   ├── components            # Components that aren't part of any module
│   ├── containers            # Container components that aren't part of any module
│   ├── modules               # Modules that add functionality to the application
│   │   ├── counter           # A simple counter module
│   │   │   ├── components    # Counter components
│   │   │   ├── views         # Views are components that map to routes
│   │   │   └── counter.js    # Constants, actions, and reducer for counter
│   │   └── landing           # Landing page module
│   ├── redux                 # Redux specific files
│   │   ├── configureStore    # Create a redux store
│   │   └── rootReducer       # Combine all reducers
│   ├── routes                # Route definitions for react-router
│   ├── styles                # Sass styling for project
│   ├── views                 # Views that aren't part of any module
│   └── index.js              # Entry point for the application
├── static                    # All files that are used in production
│   ├── assets                # Project assets
│   ├── (dist)                # Source code will be bundled and output here by webpack
│   └── index.html            # Entry point for the browser
└── test                      # Unit tests
```

## Deployment
There are several different ways in which to deploy the application. The most
simple, and the way which I personally prefer, is to simply upload the compiled
files to a service that specializes in delivering static content.
This is possible because the compiled client-side application is entirely static.
One such service is Amazon's [AWS S3](https://aws.amazon.com/s3/).
Simply compile your app with `npm run deploy`, sign up on Amazon Web Services,
create an S3 bucket, configure it as a static website, and finally upload
everything from the static folder into the bucket.

Another option is to use a virtual server like the ones at
[Digital Ocean](https://www.digitalocean.com/). Start by installing Node on
the server and then just follow the steps at
[Getting Started](#getting-started).

Note: you might want to change the port at which the Express server runs. You can
specify a port with `PORT=<PORT_NUMBER> npm run prod`.

Yet another option, if you don't want to manage your own virtual server but would
instead like for someone to do it for you, is to look into managed hosting.
[Heroku](https://heroku.com) is a popular option for this.

## Contributing
I am more than happy to accept any external contributions to the project in the
form of feedback, bug reports, or even better - pull requests.

## License
MIT
