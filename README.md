# General Assembly - WDI Instructor Code Challenge

![Movie App](https://user-images.githubusercontent.com/7386478/48305673-2a292b00-e4fd-11e8-9f48-2f558139bbfd.png)

## As an instructor...

As an instructor, this exercise provides a comprehensive array of lessons to be learned and takeaways on how to approach an advanced project. 

## Topics 

1. [What do we have here?](#starting)
2. [Model View Controller and Setup](#mvc)
3. [Server Side and Express](#server)
4. [Front End and React - Why?](#front)
5. [WorkFlow](#workflow)
6. [Css and Sass](#sass)
7. [Wireframe](#wireframe)
8. [Tools](#tools)
9. [When You run into problems](#help)
10. [Stretching Yourself](#improving)
11. [Tuning up](#cleanup)
12. [Deployment](#deployment)

## starting

I would start with a making sure students have a core understanding of how the internet works.
    1. what is a client and a server?
    2. how does a client make a request to get a resource and display it on the screen?
    3. http protocols and information sent upon a request and response.
    4. the difference between client-side code and server-side code.
    5. what are the ways we can save information?

![Diagram](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)

## mvc

With an understanding of how things works behind the scences after we press 'enter', we can break down one of the most basic application design patterns, Model-View-Controller. the importance of this lays in the flow of information, getting data, manipulating it, and returning to the client in a dynamic way. Why we have a seperation of concerns and a walk through example

 ![example](https://user-images.githubusercontent.com/7386478/48306355-1255a500-e505-11e8-87d5-8292cc79524f.png)

This Library app from my repo represents a clear and well organized approach with Node and Express on how we define Models - a representation of data for our database and receives input form our controller, Views - how do  we create templates for information and render a view, and Controllers - accepts input and controls what parts of the app are needed, routes, data, etc.

## server

Now we can start walking though our server.js code and understand what things are such as our imports/ required modules, middleware (why order matters), what is Express.js and the abstraction over Node.js, core Node modules such as FileSystem and how we write to data.json, HTTP methods, and lastly, setting up a server.
