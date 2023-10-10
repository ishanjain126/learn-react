/** Create the nested structure along with the siblings inside the react
 *
 *
 * <div>
 *  <div id="chid">
 *      <h1>I am the nested and sibling h1</h1>
 *      <h2>I am the nested and the sibling h2</h2>
 *  </div>
 * </div>
 *
 * ReactElement(Object) = HTML(Browser understands)
 *
 */

// In order to create the siblings we need to use the array of children
// instead of just one child

// This is the core of React. This is how react creates the element
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am the nested and sibling h1"),
    React.createElement("h2", {}, "I am the nested and the sibling h2"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/*

// What is the use of the empty object in the below line?
// This object is the place where we give the attribute to the tag.
// For eg: If we want to give id to the header

const header = React.createElement(
  "h1",
  { id: "header" },
  // {},
  "Welcome to react basics using the CDN"
);

console.log(header); // This is returning the object for you
// This header (React.createElement) is basically returning us the object
// It has something called as props.
// Props are basically the attributes which we pass while creating the
// element, while children is the third argument which we provide while
// creating the same.

const root = ReactDOM.createRoot(document.getElementById("root"));

//  Job of the function is to create the object, create the tag which we
// want and then put it inside the root.
root.render(header); // This is responsible to convert the passed object into the h1 tag and put it into the DOM


*/
