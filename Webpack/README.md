### How to setup Webpack for a basic project.
Let's beg the question first, How would I *use* Webpack for a basic project? Webpack does a great job bundling and code splitting for us. It does such a good job that it's actually **built in to create-react-app by default**. So if for some strange reason, I was adding it to a project rather than jumping off the create-react-app platform, we'd start by installing it, as well as webpack-cli, the command line interface for utilizing webpack.

`npm install webpack webpack-cli --save-dev`

will get that package installed locally.
It's important conceptually that you split source code into the files that build what you want to serve, src, and the files that will be used in the *distribution*, dist. By default, webpack pulls in the entry point, src/index.js, and will generate dist/main.js as the output.