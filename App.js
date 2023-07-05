import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1",{id:"title"},"Heading")

const heading = <h1 id="heading">Heading means Title</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);