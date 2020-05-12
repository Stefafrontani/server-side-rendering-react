# Server side rendering w/ React - Views as entry points - Metadata[in prog]

## Installation
$ npm install

## Running the project
This has two steps:

### Generate bundles from the different pages
For each page you should create a jsx and an index.js file. The jsx file will have the component view while the index will hidrate the html rendered from the server with the events and attributes each element in the DOM should have. (That's the difference between .hydrate and .render).
Each html served by the server will have a script referencing the view component (i.e.: entry `home`) which will be taken from the dist folder, where webpack placed the output bundles.
To generate the bundles run:
	$ npm run webpack

As mentioned, this will create the file inside the following path: ssr-practice/src/client/dist/[view].js.

### Run the server
	$ npm run start-dev

The previous command runs this
	$ nodemon --exec babel-node src/server/server.js

nodemon              : the dependency installed to watch files so we do not have to re-start the server on each change
--exec               : nodemon will run src/server/server.js with babel-node which helps us compile the code with babel-node
babel-node           : A CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it. All alone, we would run like `npx babel-node src/server/server.js`. It would not watch changes on that path
src/server/server.js : watched file/s
As this commands calls babel-node, the .babelrc file will be took while running it.

## Files structure

root
	|_ node_modules : installed dependencies
	|_ src : code in here
		|_ client
            |_ dist : where the js bundles created by webpack are placed
            |_ pages
                |_home : each folder inside /pages should be a view with its entry point in webpack.
                |_about : idem home
		|_ server
			|_ helpers
				|_ renderTemplate.js : function to create the html that is served by the server
			|_ routes
				|_ index.js : Where HTML's are created and served
			|_ server.js : Create express server and define routes
	|_ .babelrc : babel config - presets and plugins. This file helps the server to work with jsx and ecma script new features
	|_ package.json
	|_ README.md
	|_ webpack.config.js : webpack configuration file - This webpack config helps the client side to transpile the react components

### _./server.js_
Start a basic server with express.
Two parts here are important:
1) static files will be served from a folder public in the src/client/dist folder.
This static files are css, images, and the js files bundled by webpack and palced inside the dist folder. Those js files will be used inside the htmls served by the server `<script src="home.js"></script>`.
If you go to `http://localhost:8080/home` or `http://localhost:8080/about`, both files will be served. Express.static() will create a "virtual" path not showed in the url (/src/client/dist/**)

2) The routes
The routes will be created in the file `routes/index.js`. There is where the magic happens.

### routes/index.js
Inside the get function we will try to require the file for the path entered.
If the user wrote /about in the url, then we would ask for the About.jsx file and create an html template for that view, including the react components related to the view.
In case no file is found, we should get that error and should send a NotFound Page. For now, only a message with the error is sent.

## Dependencies
	"@babel/cli"                              : Gives the babel cli inside `/@babel/cli/bin`
	"@babel/core"                             : Gives the methods that eventually will transpile the code (i.e.: transformFileAsync, transformFileSync)
	"@babel/node"                             : babel-node i s the exact same of running node filename.js with the advantages of running that code with the presets and plugins passed to babel (in this project, the ones set on .babelrc). babel-node used the babel-polyfill automatically to emulate a full ES2015+ environment (no < Stage 4 proposals).
	"@babel/plugin-proposal-class-properties" : Allows to use class ClassName syntax
	"@babel/polyfill"                         : Used in babel-node automatically
	"@babel/preset-env"                       : Use the last es features
	"@babel/preset-react"                     : Allows jsx
	"babel-loader"                            : The loader used in the webpack.config.js file
	"nodemon"                                 : Watch files for changes
	"webpack"                                 : We have to use webpack to create the transpile bundles of the react components
	"webpack-cli"                             : Give access to webpack commands




