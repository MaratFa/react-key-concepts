import "./App.css";
import GoalItem from "./components/GoalItem";

function App() {
  return (
    <ul>
      <GoalItem id="q1" title="Finish the book" />
      <GoalItem id="g2" title="Learn all about React" />
    </ul>
  );
}

export default App;
