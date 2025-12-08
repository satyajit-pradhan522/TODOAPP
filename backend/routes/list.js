const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// ===============================
// ✅ CREATE A NEW TASK
// ===============================
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "User ID required" });
    }

    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTask = new List({
      title,
      body,
      user: id,
    });

    await newTask.save();

    existingUser.list.push(newTask._id);
    await existingUser.save();

    return res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// ===============================
// ✅ UPDATE TASK
// ===============================
router.put("/updateTask/:taskId", async (req, res) => {
  try {
    const { title, body } = req.body;

    const updatedTask = await List.findByIdAndUpdate(
      req.params.taskId,
      { title, body },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// ===============================
// ✅ DELETE TASK
// ===============================
router.delete("/deleteTask/:taskId/:userId", async (req, res) => {
  try {
    const { taskId, userId } = req.params;

    await List.findByIdAndDelete(taskId);

    await User.findByIdAndUpdate(userId, {
      $pull: { list: taskId },
    });

    return res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// ===============================
// ✅ GET ALL TASKS OF USER
// ===============================
router.get("/getTasks/:userId", async (req, res) => {
  try {
    const data = await User.findById(req.params.userId).populate({
      path: "list",
      options: { sort: { createdAt: -1 } },
    });

    if (!data) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({
      tasks: data.list,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
