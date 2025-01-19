// In previus lecture React keyword coming from CDN links: React. ........
// now we using import-export
import React from "react"; // this React and ReactDOM coming from node_moduels : npm i react and react-dom
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is my react app🫡"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h1", {}, "this is h2 tag"),
  ]),
]);

// JSX

console.log(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root")); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

// root.render(heading);
root.render(parent);

// In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
