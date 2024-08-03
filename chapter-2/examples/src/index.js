import React from "react";
import ReactDOM from "react-dom/client";

function Advertisement() {
  return React.createElement(
    "a",
    { href: "https://my-website.com" },
    "Visit my website"
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Advertisement />
    <p>Welcome to this book!</p>
  </div>,
  document.getElementById("root")
);
