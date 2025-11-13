import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;
    onAddTask(task);
    setTask(""); // clear input
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
