/* <div id="parent">
 <div id ="child">
 <h1>me h1 tag </h1>
 </div>
  </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "me h1 tag"),
    React.createElement("h2", {}, "me h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
