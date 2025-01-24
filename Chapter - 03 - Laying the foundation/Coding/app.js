import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElement(render)
// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste-aditor");

/**
- this are complex syntax for creating elements
- so we are using JSX-html+JS:- (it's not a part of react ) for easy syntax
-  JSX => React.createElement(convert using Bable for make understable for react) => object => HTMLElement(render)
- JSX (transipiled before it reaches the JS Engine)
- create react-element(jsxHeading) using JSX: (transpiled befor it reaches the JS engine)-> using PARCEL -> Bable
- if we given attributes to JSX, we have to use camelCase
*/
const jsxHeading = <h1 className="heading">namaste react using JSX</h1>;

// it is replace html-#root elements to heading not append
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// * React Component - it is  a normal JS function which returns some piece of JSX, Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
// Functional component - new way of writing component
// Class component - old way of writing component

// * React Functional Components
// const HeadingComponent = () => {
//   return <h1 className="heading">this is functional component</h1>;
// };

const Title = () => <h1 className="title">namaste react using JSX</h1>;

const HeadingComponent = () => (
  <div id="container">
    {/* component composition : React me ek component ke andar doosre components ko use karna */}
    <Title />
    {Title()}
    <Title></Title>
    {/* this are same things  */}
    {jsxHeading}
    {/* inject JS inside JSX with the help of {} */}
    <h1 id="heading">this is functional component{1000 + 2000}</h1>{" "}
  </div>
);

// * render a functional component <.../>
// passing react element inside root
root.render(<HeadingComponent />);

// ------------------------------------------------------------------------------------------------------------------------------
// our code is readable and easier beacause we are using JSX and JSX is not react
