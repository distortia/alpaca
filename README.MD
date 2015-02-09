Alpaca Chat
=============
The fully encrypted, lightweight, instant messenger!
(There are more buzzwords, but I am not too worried about that :P)


Break down of packages
=======================

BackEnd
----------------
NodeJs: Javascript Server Engine.
ExpressJs: "The Rails of Node" - does routing/requests/views/scaffolding.
Socket.io: Allows for realtime communications - Is both Frontend and Backend.
MongoDB: JSON oritented database.

FrontEnd
--------------
SkeletonUi: CSS boilerplate with built-in grid ~ 400 lines of css.
Sass: CSS Preprocessor that allows for traditional programming methodology to be applied to css (functions, methods, mathematical equations).
Polymer: Googles Material-ui framework that creates and invokes custom web components/aninmations. 
Angular: Googles front end Model, View, View-Model framework that is based on single page applications that dynamically load content.


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
and point your browser to localhost:9001 (cause it's over 9000!).


