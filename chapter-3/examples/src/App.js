import "./App.css";
import GoalItem from "./components/GoalItem";
import Link from "./components/Link";
import Product from "./components/Product";

const productData = { title: "A book", price: 29.99, id: "p1" };

function App() {
  return (
    <ul>
      <GoalItem id="q1" title="Finish the book" />
      <GoalItem id="g2">Learn all about React</GoalItem>
      <Product {...productData}>3sdafgsdf</Product>
      <Link>Link</Link>
    </ul>
  );
}

export default App;
