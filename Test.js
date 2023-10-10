import React from "react";
import ReactDOM from "react-dom/client";

const testHeader = React.createElement(
  "h1",
  { id: "test" },
  "This is the test element"
);

const testRoot = ReactDOM.createRoot(document.getElementById("test-div"));

testRoot.render(testHeader);
