#  

## Running

1. Install dependencies ```npm install```
2. List runnable operations ```npm run```
3. To start the server in dev mode ```npm start```


Running the project with `npm start` will automatically lint the code and the rerun the linting when any code changes are detected.


The are a few READMEs in the directories that might help understanding. Although not intended as a learning resource in isolation they should help explain how react/redux hangs together. [Start here](./src/README.md)

# Prerequisite

## Node
See version in `.node-version` file

## Deployment to firebase

*Note* 

Change the values in `src/config.js` to your own values. 

* Go into the Firebase console and click the "Auth" tab
* Click the "Web Setup" button and grab the data within the var config object. Paste it in the `const config = {}` in the `src/config.js` file.
* Click the Sign-In Method horizontal tab
* Enable the Email/Password sign-in provider

Insure that you have the firebase tools installed

     npm install -g firebase-tools

To deploy

    firebase deploy
