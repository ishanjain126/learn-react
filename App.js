import React from "react";
import ReactDOM from "react-dom/client";

// React element => It is basically an object => HTMLElement(render)
/* NEVER BE USING THIS SYNTAX */
// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, // This is the object where we can pass the attributes
//   "This is the header (Child)"
// );

// React Element

// JSX => HTML like  or XML-like syntax
// JSX code gets transpiled before it reaches the JS Engine

// JSX => (transpiled using Babel) React.createElement => ReactElement - JS Object => HTMLElement(render)
// const heading = <h1>This is the JSX heading</h1>;

// console.log(heading); // Returns the same result as heading, an Object

// React Component
const Title = () => (
  <h1 className="head" tabIndex={"5"}>
    Ishan Jain
  </h1>
);

const titleElement = <h1>This is the title element</h1>;

// Component Composition
const HeadingComponent = () => (
  <div>
    <Title />
    <Title></Title>
    {titleElement}
    <h1>Welcome to React Course</h1>
  </div>
);

//

// React DOM is used in order to render the object (returned from the createElement) onto the browser
const root = ReactDOM.createRoot(document.getElementById("root")); // When rendered on the DOM, then it becomes the HTML element

root.render(<HeadingComponent />);
