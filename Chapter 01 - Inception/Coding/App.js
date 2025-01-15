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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // this render method conver heading object in h1 tag and put
