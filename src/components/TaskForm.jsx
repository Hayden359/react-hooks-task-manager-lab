import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();

    const title = taskName.trim();
    if (title === "") return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">New Task:</label>

      <input
        id="taskName"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;