import FirstGoal from "./FirstGoal";
import SecondGoal from "./SecondGoal";
import ThirdGoal from "./ThirdGoal";

function GoalList() {
  return (
    <ul className="goal-list">
      <FirstGoal />
      <SecondGoal />
      <ThirdGoal />
    </ul>
  );
}

export default GoalList;
