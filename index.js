import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import YouTubeCounter from "./components/YouTube/YouTubeCounter.jsx";

function App() {
  return (
    <div className="App">
      <YouTubeCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
