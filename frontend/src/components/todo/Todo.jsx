import React, { useState, useEffect } from "react";
import "./Todo.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const userId = sessionStorage.getItem("userId");

const Todo = () => {
  const [task, setTask] = useState({ title: "", body: "" });
  const [taskList, setTaskList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  // Add Task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!task.title || !task.body) return;

    try {
      const res = await axios.post(
        `${window.location.origin}/api/lists/addTask`,
        {
          title: task.title,
          body: task.body,
          id: userId,
        }
      );

      setTaskList([...taskList, res.data.task]);
      toast.success("Task added successfully!");
      setTask({ title: "", body: "" });
    } catch {
      toast.error("Failed to add task");
    }
  };

  // Delete Task
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(
        `${window.location.origin}/api/lists/deleteTask/${taskId}/${userId}`
      );
      setTaskList(taskList.filter((t) => t._id !== taskId));
      toast.success("Task deleted successfully!");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  // Start Update
  const startUpdate = (item) => {
    useEffect(() => {
      setIsUpdating(true);
      setCurrentId(item._id);
      setTask({ title: item.title, body: item.body });
    }, [item]);
  };

  // Update Task
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    if (!currentId) return;

    try {
      const res = await axios.put(
        `${window.location.origin}/api/lists/updateTask/${currentId}`,
        {
          title: task.title,
          body: task.body,
        }
      );

      const updatedTask = res.data.updatedTask;
      setTaskList(taskList.map((t) => (t._id === currentId ? updatedTask : t)));
      toast.success("Task updated successfully!");
      setIsUpdating(false);
      setCurrentId(null);
      setTask({ title: "", body: "" });
    } catch {
      toast.error("Failed to update task");
    }
  };

  // Fetch tasks on mount
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`${window.location.origin}/api/lists/getTasks/${userId}`)
      .then((res) => setTaskList(res.data.tasks))
      .catch(() => toast.error("Failed to load tasks"));
  }, [userId, taskList]);

  return (
    <div className="todo-container py-5">
      <ToastContainer />
      <div className="text-center mb-4">
        <h1 className="fw-bold app-title">Your Todos</h1>
        <p className="text-muted">Stay organized and manage your daily work</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="todo-card shadow-lg p-4 rounded-4">
            <h4 className="mb-3 form-title">
              {isUpdating ? "✏️ Update Task" : "➕ Add New Task"}
            </h4>

            <form onSubmit={isUpdating ? handleUpdateTask : handleAddTask}>
              <input
                className="form-control mb-3"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-3"
                name="body"
                placeholder="Task Description"
                rows="3"
                value={task.body}
                onChange={handleChange}
                required
              />
              <button
                className={`btn w-100 custom-btn ${
                  isUpdating ? "btn-update" : "btn-add"
                }`}
                type="submit"
              >
                {isUpdating ? "Update Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          {taskList.length === 0 ? (
            <div className="text-center empty-state">
              <h5>No tasks yet</h5>
              <p>Add some tasks to get started.</p>
            </div>
          ) : (
            taskList
              .slice()
              .reverse()
              .map((item) => (
                <div
                  className="todo-item shadow-sm p-3 rounded-4 mb-3"
                  key={item._id}
                >
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                  <small>
                    Created: {new Date(item.createdAt).toLocaleString()}
                  </small>
                  <div className="mt-2">
                    <button
                      className="btn btn-sm btn-update2 me-2"
                      onClick={() => startUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-delete"
                      onClick={() => deleteTask(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
