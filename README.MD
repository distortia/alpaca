**Update: I am working on how to structure the chat application on top of our existing web site**

Alpaca Chat
=============
The fully encrypted, lightweight, instant messenger!
(There are more buzzwords, but I am not too worried about that :P)


Break down of packages
=======================

BackEnd
----------------
* NodeJs: Javascript Server Engine.
* ExpressJs: "The Rails of Node" - does routing/requests/views/scaffolding.
* Socket.io: Allows for realtime communications - Is both Frontend and Backend.
* MongoDB: JSON oritented database.

FrontEnd
--------------
* SkeletonUi: CSS boilerplate with built-in grid ~ 400 lines of css.
* Sass: CSS Preprocessor that allows for traditional programming methodology to be applied to css (functions, methods, mathematical equations).
* Polymer: Googles Material-ui framework that creates and invokes custom web components/aninmations. 
* Angular: Googles front end Model, View, View-Model framework that is based on single page applications that dynamically load content.

Installations
=================

###Node
----------
Download node from [nodejs.org](nodejs.org)

###Ruby
--------------
Download Ruby
* OSX comes with Ruby
* Windows go to (http://rubyinstaller.org/)

###SASS
--------------
Install SASS by typing:
```ruby
gem install sass
```

SASS and Ruby must be in your path in order for the rest to work.


###Grunt-cli
-------------
```javascript
npm install -g grunt-cli
```
the -g flag, installs it globally, so it can be used everywhere

###Everything Else
------------------
```javascript
npm install
```
This will install everything inside the package.json file that you have pulled.


How to use
=============

#Grunt

Grunt is a task-runner. You can create custom tasks, such as compiling SASS to CSS. There are already a few tasks pre-built. These tasks are SASS compilation, JSHint(checks for errors in javascript files), Uglify(compresses + lints + combines your JS files), and Watch(watches specific tasks for changes and will run the task on change).

###Grunt Dev
-----------------
There are custom dev tasks built into the grunt file. To run these type: 
```javascript
grunt
```

###Grunt Build
-------------
The build tasks are for final build, ready to deploy to live server. To run these type:
```javascript
grunt build
```

###Grunt watch
-------------
Watch tasks are set to run on specifc file changes. Right now, they compile SASS to CSS and combine all Javascript files into one 
To run watch type:
```javascript
grunt watch
```

#Node Server

To run the chat app, type: 
```javascript
node server.js
```
and point your browser to localhost:9001 (cause it's over 9000!)


File Structure
===================
All SASS/JS files being worked on will live inside the src folder. Grunt is set up to build these files and move them to the proper folder.


Dev Process
====================
Pull the git changes
```javascript
git pull
```
sometimes you have to specify the branch. ie git pull origin [branch_here]

start grunt
```javascript
grunt watch
```
and start working! 
