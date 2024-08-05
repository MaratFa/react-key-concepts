import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const userName = "Max";
  return <p>Hi, my name is {`super ${userName}`}!</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
