# General Assembly - WDI Instructor Code Challenge

![Movie App](https://user-images.githubusercontent.com/7386478/48305673-2a292b00-e4fd-11e8-9f48-2f558139bbfd.png)

## As an instructor...

As an instructor, this exercise provides a comprehensive array of lessons to be learned and takeaways on how to approach an advanced project. 

## Topics 

1. [What do we have here?](#starting)
2. [Model View Controller and Setup](#mvc)
3. [Server Side and Express](#server)
4. [Front End and React - Why?](#react)
5. [WorkFlow](#workflow)
6. [Css and Sass](#sass)
7. [Tools](#tools)
8. [When You run into problems](#help)
9. [Stretching Yourself](#improving)
10. [Tuning up](#cleanup)
11. [Deployment](#deployment)

## starting

I would start with a making sure students have a core understanding of how the internet works.

    1. what is a client and a server?
    2. how does a client make a request to get a resource and display it on the screen?
    3. http protocols and information sent upon a request and response.
    4. the difference between client-side code and server-side code.
    5. what are the ways we can save information?

![Diagram](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)

## MVC

With an understanding of how things works behind the scences after we press 'enter', we can break down one of the most basic application design patterns, Model-View-Controller. the importance of this lays in the flow of information, getting data, manipulating it, and returning to the client in a dynamic way. Why we have a seperation of concerns and a walk through example

 ![example](https://user-images.githubusercontent.com/7386478/48306355-1255a500-e505-11e8-87d5-8292cc79524f.png)

This Library app from my repo represents a clear and well organized approach with Node and Express on how we define Models - a representation of data for our database and receives input form our controller, Views - how do  we create templates for information and render a view, and Controllers - accepts input and controls what parts of the app are needed, routes, data, etc.

## Server

Now we can start walking though our server.js code and understand what things are such as our imports/ required modules, middleware (why order matters), what is Express.js and the abstraction over Node.js, core Node modules such as FileSystem and how we write to data.json, HTTP methods, and lastly, setting up a server.

## React

With the backend out of the way we can move onto React and the evolution of the View layer and why it is so popular. A spin up of a create-react-app and a walkthough of the app would give students an overview of how powerful the client side is currently. This naturally leads into what exactly is a Single Page App, the look, the feel, the functionality. How does React fit into professional web development? What are the disadvantages and the advantages of SPA's.

With the server and the front  end addressed, we can start to talk about connecting and configuring the app.

## Workflow

Before we begin writing code we take a trip to the whiteboard and visualize the User Interface, our app functionality, and the think about design and how it affects functionality. We need to discuss version control and its importance. Styling along the way and why we shouldn't leave it to the end. Do we start from the bottom or the top? 

## Sass

As we create our app we need to style it. At this point I would introduce preprocessors like Less and Sass and what it has to offer us. How we can enable Scss in our React app as of React 2.0 recently released. Speaking of which, I would touch on why it is vital to stay current on all the tools we use and how new releases like React 16, Babel 7, and Webpack 4, and how they have changed and improved.

## Tools

Besides Git and Github what else can we use to help us? For example, Postman to view the shape of our reponse from a request to the api. Balsamiq and Sketch for mockups. Codesandbox.io and Codepen.io for React app experiments and the latter for css inspiration and testing. 

The number one tool we have in our arsenal are the Docs. For example, one of the last errors I had to fix to get the data working on the backend was looking up the FileSystem module in the Node docs and seeing that the .writeFile method requires a callback. 

The terminal is the first place that we lave to understand in order to see our errors and where they originated.

## Help

Aside from the docs, the most important part of being a web developer is knowing how to fix your problems and where to go for help. I would encourage the students to get used to StackOverflow and ask questions in order to learn what getting help looks like. Learning google and deciphering  good search results from bad. Is the information more than a year old? It may or may not be relevant anymore. The issues pages on github. Searching on github for gists or repos that are similar to a problem that you have. How to find where errors originate from and what they mean. 

Teaching students to be resourceful is vital to future success. 

#### The magic of having something work on the screen can be overshadowed by an error that can't be understood or the feeling of helplessness when stuck.

I would talk about problems I faced and how one's confidence builds tremendously when you develop a strategy to move foreward and figure things out.

## Improving

This is the part where I emphasize moving out of one's comfort zone and experimentation. It's easy to stay in the comfort of familiar technologies, but what makes one very marketable is the ability to learn on your own and deploy new techniques. In this instance, I've never created a modal in React using Portals and I've never even connected a React app to Express. This is the most important lesson I feel I could teach - learn fast, never be afraid of a challenge, and the struggle will make you better.

## Cleanup

At this point we finish the app, it's working and we achieved magic - something works!! This is where we see what we can do better, refine our code, make the styling a bit more crisp, look at libraries that might make ourjob easier the next time. For example, I found a great library for cool React Modals. Are the things in the app we still don't understand? Did we DRY enough? 

I would take this oppotunity to illustrate how in the Movies component we pass a ton of props through only to get it to the Movie component. This is a great example of improving our code by developing a better understanding of the React Context API.

## Deployment

Deployment is no less an important feat because if you create an app and no one sees it, did it ever realy exist? How dow we present our professional grade work? Heroku is the weapon of choice as a cloud platform. I would talk about other options such as Digital Ocean or Amazon Web Services.
