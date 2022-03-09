import CopyButton from "./CopyButton";
import OptionButton from "./OptionButton";
import Card from "react-bootstrap/Card";
import PremadeOptions from "./PremadeOptions";

const PremadeTask = ({ task, onCopy}) => {
  
  return (
    <>
    <Card key={task._id} className="task-card">
      <div className="task-text">{task.text}</div>
      <div className="task-counter">
        <div className="task-reps">
          {task.completedReps}/{task.targetReps}
        </div>
        <div className="task-btn">
          <CopyButton taskId={task._id} onCopy={onCopy} />
          <OptionButton onOption={task.options}/>
        </div>
      </div>
    </Card>
    <PremadeOptions task={task}/>
    </>
    
  );
};

export default PremadeTask;
