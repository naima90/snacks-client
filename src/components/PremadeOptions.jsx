import Card from "react-bootstrap/Card";

const PremadeOptions = ({task}) => {
  
  console.log(task.options)
  return (
    <Card className="task-list-card">
      <h2>Premade Option</h2>
      <div className="task-list">
        {task.options && task.options.map((recipe) => (
           <div>{recipe}</div>

  ))}
      </div>
    </Card>
  );
};

export default PremadeOptions;