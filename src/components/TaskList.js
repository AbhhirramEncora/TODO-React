import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet 💤</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
