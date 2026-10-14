import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({ tasks = [], query = "" }) {
  const { setTasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  function handleToggle(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>

          <button
            data-testid={task.id}
            onClick={() => handleToggle(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;