import API from "../services/api";

function TaskItem({ task, fetchTasks, setEditingTask }) {
  const deleteTask = async () => {
    if (window.confirm("Delete this task?")) {
      await API.delete(`/${task._id}`);
      fetchTasks();
    }
  };

  return (
    <div className="card">
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <span>{task.status}</span>

      <div className="buttons">
        <button onClick={() => setEditingTask(task)}>
          Edit
        </button>

        <button onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;