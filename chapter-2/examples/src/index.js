import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return React.createElement("p", {}, [
    "Please visit my ",
    React.createElement("a", { href: "https://my-blog-site.com" }, "Blog"),
  ]);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <p>Welcome to this book!</p>
  </div>,
  document.getElementById("root")
);
