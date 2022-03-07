import Task from "./Task";
import Card from "react-bootstrap/Card";
import {SortableElement} from 'react-sortable-hoc';

//const SortableItem = SortableElement(Task)
const SortableItem = SortableElement(({Task}) => <li>{Task}</li>);
console.log(SortableItem);
const TaskList = ({ tasks, onDone }) => {
  return (
    <Card className="task-list-card">
      <h2>TaskList</h2>
      <div className="task-list">
        {tasks &&
          tasks.map((task, i) => {
            //<Task key={task._id} task={task} onDone={onDone} />
            return <SortableItem  task={task} index={i} key={task.id}  />
            
            // todo={x}
            // index={i}
            // key={x.id}
          })}
      </div>
    </Card>
  );
};

export default TaskList;
