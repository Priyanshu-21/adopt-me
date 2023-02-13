// ! Introduction to react Js
import React from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./searchParams";


/* 
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Sheru",
      breed: "Indian",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Lily",
      breed: "Indian Parrot",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Doink",
      breed: "Mixed Breed",
    })
  );
};
*/

// ! write the App component with the new jsx method
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}
// calling and creating of node by using the react DOM and rendering the container
const container = document.getElementById("root");
const rootNode = ReactDOM.createRoot(container);
rootNode.render(<App />);
