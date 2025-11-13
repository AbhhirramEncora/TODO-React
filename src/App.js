import { useState , useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


  return (
    <div className="App">
      <h1>🧠 Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default App;
