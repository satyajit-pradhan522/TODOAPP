import React, { useState } from "react";
import "./Todo.css";
import { ToastContainer, toast } from "react-toastify";

const Todo = () => {
  const [task, setTask] = useState({
    title: "",
    body: "",
  });

  const [taskList, setTaskList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Input Change
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Add Task
  const handleAddTask = (e) => {
    e.preventDefault();

    if (!task.title || !task.body) return;

    setTaskList([...taskList, { ...task, id: Date.now() }]);
    setTask({ title: "", body: "" });

    toast.success("Task added successfully!");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
    toast.success("Task deleted successfully!");
  };

  // Start Updating Task
  const startUpdate = (item) => {
    setIsUpdating(true);
    setCurrentId(item.id);
    setTask({
      title: item.title,
      body: item.body,
    });
  };

  // Save Updated Task
  const handleUpdateTask = (e) => {
    e.preventDefault();

    const updatedList = taskList.map((item) =>
      item.id === currentId
        ? { ...item, title: task.title, body: task.body }
        : item
    );

    setTaskList(updatedList);
    setTask({ title: "", body: "" });
    setIsUpdating(false);
    setCurrentId(null);

    toast.success("Task updated successfully!");
  };

  return (
    <div className="container py-5">
      <ToastContainer />

      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Your Todos</h1>
        <p className="text-muted">Stay organized and manage your daily tasks</p>
      </div>

      <div className="row g-4">
        {/* Add / Update Task Form */}
        <div className="col-12 col-lg-4">
          <div className="card shadow p-4">
            <h4 className="mb-3">
              {isUpdating ? "Update Task" : "Add New Task"}
            </h4>

            <form onSubmit={isUpdating ? handleUpdateTask : handleAddTask}>
              {/* Title */}
              <div className="mb-3">
                <label className="form-label">Task Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter task title"
                  value={task.title}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Body */}
              <div className="mb-3">
                <label className="form-label">Task Description</label>
                <textarea
                  className="form-control"
                  name="body"
                  rows="3"
                  placeholder="Enter task description"
                  value={task.body}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                className={`btn w-100 ${
                  isUpdating ? "btn-warning" : "btn-primary"
                }`}
                type="submit"
              >
                {isUpdating ? "Update Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>

        {/* Task List */}
        <div className="col-12 col-lg-8">
          {taskList.length === 0 ? (
            <div className="text-center text-muted mt-5">
              <h5>No tasks yet</h5>
              <p>Add some tasks to get started.</p>
            </div>
          ) : (
            <div className="row g-3">
              {taskList.map((item) => (
                <div className="col-12" key={item.id}>
                  <div className="card shadow-sm p-3 d-flex flex-row justify-content-between align-items-start">
                    <div>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-muted mb-2">{item.body}</p>
                      <small className="text-secondary">
                        Created at: {new Date(item.id).toLocaleString()}
                      </small>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      {/* Update */}
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => startUpdate(item)}
                      >
                        Update
                      </button>

                      {/* Delete */}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteTask(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
