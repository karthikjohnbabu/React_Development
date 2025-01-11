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

Note: React Official Documentation:

- We dont recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

