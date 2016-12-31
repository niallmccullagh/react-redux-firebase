#  React/Redux/Firebase Authentication template

A template to get an application up and running with react/redux with firebase authentication built in.

Note: I've created this as part of the learning process of this stack. I'm not a seasoned user of react but love hacking things together when learning.

Also there are no tests. I always like learning through TDD so I apologise in advance for there being no tests to learn from. :-(

## Running

1. Install dependencies ```npm install```
2. List runnable operations ```npm run```
3. To start the server in dev mode ```npm run start```


Running the project with `npm start` will automatically lint the code and the rerun the linting when any code changes are detected.


The are a few READMEs in the directories that might help understanding. Although not intended as a learning resource in isolation they should help explain how react/redux hangs together. [Start here](./src/README.md)

# Prerequisite

## Node
See version in `.node-version` file

# Create distribution
By running

    npm run build

a distributable set of files will be created under the dist folder.

You can test this distribution locally be running
    npm run start:dist
# Deployment to firebase

Change the values in `src/config.js` to your own values. 

* Go into the Firebase console and click the "Auth" tab
* Click the "Web Setup" button and grab the data within the var config object. Paste it in the `const config = {}` in the `src/config.js` file.
* Click the Sign-In Method horizontal tab
* Enable the Email/Password sign-in provider

Insure that you have the firebase tools installed

     npm install -g firebase-tools

To deploy

make sure that you have built the code by 
```
npm run build
```

then deploy 

```
firebase deploy
```
    