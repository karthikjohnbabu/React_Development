# Episode-02 Igniting our App

- To make the app ready to get into production

  - Lot of processing in Local
  - Buddling
  - Code splitting
  - Chunking
  - Image optimization
  - Code Compressing

- npm init -> Created a package.json file which is the configuration for NPM.

The most imporatant package in our project

- It is a Bundler

What is a bundler ?

- Our entire project code should be bundled together, our whole code should be minified, our whole code should be cached, our whole code should be compressed and cleaned, before sending it to production.

A bundler helps us do so.

# What is a bundler ?

- Webpack, Parcel, Vite. All these are bundlers

What is the Job of a Bundler?

- Bundler basically bundles the App.
- It packages your app properly
- So that it can be shipped to production

# How to install parcel ?

- npm install -D parcel

There are two types of packages, There are two types of dependencies that we can install

1.  Dev Dependencies
2.  Normal Dependencies

Dev Dependencies -> Generally used in depevelopment environment

# What are transitive dependencies?

- These are the libraries or modules required by our direct dependencies
- Example: If library A depends on library B, then library B becomes a transitive dependency of our project.

- If you have package.json and package-lock.json you can recreate the node module.

npx parcel index.html
(Hosted the Application on Server running at http://localhost:1234)

# What did parcel do here ?

- npx parcel index.html
- just like we have npm, we have something know as npx.
- npx -> refers to executing a package.
- npm -> refers to installing a package.

- Parcel package is such a beast
- Parcel goes to the source index.html and build a development build and hosts the development build on port no 1234.

Another way to get the react into our App is through NPM.

Fetching from CDN for react is costly operation.

- npm install react
- npm i react-dom

# what is parcel doing for us?

- It is creating a Dev Build for us
- It created a local server for us
- Parser is also refreshing the web page. (HMR= Hot Module Replacement)
- Parser uses file watching algorithm which is written in C++
- Parser is also caching things for you, faster builds.
- Parser will also do image optimization
- Parser will also do minification of our files
- Parser will also Bundling
- Parser will also compress the file
- Consistency Hashing -> Keeps tracks of all changes
- Code Splitting
- Differential Bundling - Supports older Browser
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking ( Will remove unused code for you)
- Different dev and prod bundles

# How do we generate a production ready build ?

- npx parcel build index.html
- The build gets in to the dist folder

# How to run the scripts from Package.json

- "scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
  },

$ npm run start or npm start -> Dev Build
$ npm run build -> Production Build

# What is React.createElement

- React element is not a HTML element
- React element is an object
- When we render this object on to the DOM, that becomes a HTML element

- JSX is not part of React.
- In react, JSX is a convention where we can merge HTML and JS together
- JSX is not HTML in JS
- JSX is HTML-Like or xml-like syntax
- JSX is not a react element
- JSX code is transpiled before it reached the JavaScript Engine
- This transpilation is done by the parcel via Babel.
- Babel is not developed by Facebook Meta.
- Babel Job is to convert, transpile JSX to react code
- JSX code is transpiled to React.createElement -> Converted to JS element -> HTML element(rendered)

# What is a React Component?

- There are two types of component in React
  1. Class Based Components - Old Way
  2. Functional Based Components - New Way

# what is a React functional component ?

- Its just a normal JavaScript function which returns some piece of JSX element
- A function returning a react element, it becomes a functional component

# What is component Composition ?

- Component inside a Component is called Component Composition

# Note: Any where inside JSX, Remember JSX start from (from here

# Goes till here)

# Inside this {} curly braces you can write JavaScript Code.

- I can use a react element inside a react element
- I can use a react element inside a functional component
- I can use a functional component inside a element

# JSX prevents cross side scripting attack

# How is Ziggy and Zomato apps are developed

# How many components in the App.

- Header
  - Logo
  - Nav Items
- Body

  - Search
  - Restaurant Container
    - Restaurant Card
      - Img
      - Name of the Res, Star Rating, cuisine, delivery time

- Footer
  - Copyright
  - Links
  - Address
  - Contact

In react we have something called as props.
Props are short form for property

Suppose we want to dynamically pass some data to a component.
We can pass it through, props.

Props are normal argument to a function

# What is Config Driven UI.

- The website is driven by data, and thats called config driven UI.
- The config driven UI means, that the UI is driven by a config.

# What is cloudinary ?

- This is again a CDN.
- When we build a large scale applications, we put all our images in CDN.
- Swiggy is using the cloudinary as their CDN to display images.

# Note: React Official Documentation:

- We dont recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

# Two types of Export/Import

- Default Export/Import

  - export default component
  - import component form "path"

- Named Export/Import
  - export const component
  - import {Component} from "path";

# What is hooks ?

- Normal Java Script utility functions
- A react hook is a normal JavaScript function given to us by react.
- That function has some logics in it.

# They are two important hooks in React

- useState() -> Used to generate Super Powerful State Variables in React, the name useState because it maintains the state of the component
- useEffect()

- Whenever a state variables updates, react re-renders the component

# Reconciliation Algorithm also knowns as React Fibre

- React creates a virtual DOM
- virtual DOM is a representation of an actual DOM
- Virtual DOM is a normal JavaScript Object

# What is a Diff Algorithm

- Basically finds the difference between two virtual DOMS

# React Fiber

- Came into existense from REACT16.

# React is fast because, react is doing efficient DOM manipulation.

# What is React Fiber Architecture?

- Fiber is the re-implementation of React's rendering engine introduced in React 16.
- It improves how React updates the UI by making the rendering process incremental and more efficient.

# Why Was Fiber Introduced?

- To solve performance issues for large, complex apps.
- To make React apps feel smoother and more responsive.
- To support features like pausing, interrupting, and prioritizing tasks.

# How Does Fiber Work?

Two Phases:

- Render Phase (Work Preparation):
  - React builds a virtual tree of changes but doesn't apply them yet.
  - This phase can be paused if higher-priority work comes in.
- Commit Phase (Work Execution):
  - React applies the changes to the DOM.
  - This phase is synchronous and can't be paused.

# Benefits of Fiber

- Smooth and fast updates even in heavy applications.
- Better handling of animations and user interactions.
- Enables advanced features like time slicing and concurrent rendering.

# What is the Diff Algorithm?

- The Diff Algorithm in React is a process for efficiently determining the differences between two versions of the virtual DOM to decide how the actual DOM should be updated.

# How It Works

- React maintains a virtual DOM, a lightweight copy of the real DOM.
- When the application state changes, React creates a new virtual DOM tree.
- The Diff Algorithm compares the old virtual DOM tree with the new one to find the minimum number of changes required.
- Only the differences (or "diffs") are updated in the actual DOM, making the rendering process fast and efficient.

# What is Reconciliation?

- Reconciliation is the process in React where the changes identified by the diff algorithm are applied to the real DOM to update the UI.

# Steps in Reconciliation

Diffing Virtual DOM Trees:

- React uses the diff algorithm to compare the current virtual DOM tree with the new virtual DOM tree.

Identifying Changes:

- React determines which elements need to be added, updated, or removed.

Applying Changes to the Real DOM:

- React updates the actual DOM based on the diffs, ensuring minimal updates and preserving performance.

# Monolith vs Microservice Architecture

# Monolith:

- We have developed APIs inside this project
- We also have developed UI code inside this project
- We also have Authentication code inside this project
- We also have database connectivity inside the project
- We also have notification SNS/SMS inside the project

# How Web Apps or UI Applications, fetch the data from the backend ?

# Approach 1

- As soon as the APP loads or Page loads we can fetch the data and render it on the UI
- Loads -> API -> Render

# Approach 2

- As soon the App loads, we will render the UI
- Later we will make the API call, and when we get the response.
- And once we have the response we will re-render the Application
- Loads -> Render -> API - Re-Render
- In react, we will always be using the Second Approach

# useEffect

- useEffect is a normal function in JavaScript
- useEffect takes two arguments, the first argument is the call back function
- And the second argument is the dependency array
- useEffect(()=> {}, [])

# When will this useEffect call back function be called ?

- The call back function will be called after the component is rendered
-

# What is a shimmer UI ?

- A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up.
- we load fake page, until we load a real page.

# Why do we need a useState Variable ?

- When ever state variables update, react triggers a reconcilation cycle.
  (Re-renders the component)

* React is re-rendering the whole body component, but its only updating the input box value inside the DOM.
* DOM manipulation is expensive, but react is efficient in this.
