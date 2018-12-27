#mfb-nodejs-boilerplate

##Clone
Clone this repo to your own project

##Configure

**Duplicate `/.env-template` and save as `/.env`**
###OR
**Create a fresh `/.env` file with the following settings**
```
# environment variables

# App settings
APP_NAME=   "mfb-nodejs-boilerplate"
APP_TITLE=  "MFB Boilierplate"
APP_SECRET= ""

# Google analytics account - if using Google Analytics
GA= ""

# Auth0 settings - if using AUTH0
AUTH0_CLIENT=   ""
AUTH0_SECRET=   ""
AUTH0_CALLBACK= ""
```
* insert app configuration settings within .env file. By defualt it will not be tracked within git
* create a random APP_SECRET value [from here perhaps?](http://md5.my-addr.com/online_random_md5_hash_generator-and-md5_random_hash.php?)
* save the .env file

###Setup
`$ npm install`

`$ npm run dev`

###Reference materials
* [sass-build-guide](https://github.com/hellobrian/sass-recipes/tree/master/node-sass) - a great blog post
* [npm-build-tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) - much inspiration here for using NPM as the build tool rather than reverting ti using Gulp or Grunt.
* [Guide to error handling in Node](https://thecodebarbarian.com/80-20-guide-to-express-error-handling) - a guide to setting up error handling within Node.
* [MDN tutorials for Express and Node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) - for how to structure skeleton app and establish database connections
* [HTML5 Boilerplate template](https://html5boilerplate.com/) - Base HTML5 template