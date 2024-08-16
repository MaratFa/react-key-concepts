function GoalItem(props) {
  return (
    <li>
      {props.title} (ID: {props.id})
    </li>
  );
}

export default GoalItem;
