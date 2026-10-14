import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

function App() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch tasks");
        return r.json();
      })
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [setTasks]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar query={query} setQuery={setQuery} />
<TaskList tasks={tasks} query={query} />
    </div>
  );
}

export default App;