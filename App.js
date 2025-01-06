import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const Heading = <h1 className="head">Namste React using JSX</h1>;

const elem = <span>React Element</span>;
const number = 10000;

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const data = 1000;

// React Component
const HeadingComponent = () => (
  <div id="container">
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
