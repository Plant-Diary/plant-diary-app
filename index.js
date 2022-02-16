import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TestCounter from "./src/TestCounter";

// TODO: add better error display on hot reload
// (forexample if we doesnt import the TestCounter but use it,
// it crashed without no sign and display error only on console)
function App() {
  return (
    <div>
      Welcome to Plant Diary
      <br />
      <TestCounter />
    </div>
  );
}

const rootContainer = document.getElementById("root");
ReactDOM.render(<App />, rootContainer);
