/**
 *
 * <div id="parent">
 *     <div id="child">
 *           <h1>i am h1 tag</h1> h1 and h2 are siblings inside the child, and this siblings for using array
 *           <h2>i am h2 tag</h2>
 *     </div>
 * </div>
 *     <div id="child2">
 *           <h1>i am h1 tag</h1>
 *           <h2>i am h2 tag</h2>
 *     </div>
 *
 */
// Manipulate the HTML DOM using React

// Create nested React Elements
// React keyword coming from CDN links
const heading = React.createElement(
  "div",
  { id: "parent", xyz: "abc" }, // this is id and xyz attribute and this is props and child, it is inside in his parent h1
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ]),
  ]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(heading); //  render method convert heading object in h1 tag and put
