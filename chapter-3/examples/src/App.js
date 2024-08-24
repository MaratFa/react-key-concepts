import "./App.css";
import GoalItem from "./components/GoalItem";
import Product from "./components/Product";

const productData = { title: "A book", price: 29.99, id: "p1" };

function App() {
  return (
    <ul>
      <GoalItem id="q1" title="Finish the book" />
      <GoalItem id="g2">Learn all about React</GoalItem>
      <Product title="A book" price={29.99} id="p1" />
    </ul>
  );
}

export default App;

