function TaskItem({ id, text, onDelete }) {
  return (
    <div className="task-item">
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
}

export default TaskItem;
