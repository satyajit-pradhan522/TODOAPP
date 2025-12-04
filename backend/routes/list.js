const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//create a task
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    } else {
      const newTask = new List({
        title: title,
        body: body,
        user: existingUser._id,
      });
      await newTask
        .save()
        .then(() =>
          res.status(201).json({ message: "Task created successfully" })
        );
      existingUser.list.push(newTask);
      await existingUser.save();
      res.status(201).json(newTask);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const updatedTask = await List.findByIdAndUpdate(
        req.params.id,
        {
          title: title,
          body: body,
        },
        { new: true }
      );
      res.status(200).json({ message: "Task updated successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email: email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all tasks of a user
router.get("/getTasks/:id", async (req, res) => {
  try {
    const userWithTasks = await User.findById(req.params.id).populate({
      path: "list",
      options: { sort: { createdAt: -1 } },
    });
    if (userWithTasks.list.length !== 0) {
      res.status(200).json(userWithTasks.list);
    } else {
      res.status(200).json({ message: "No Tasks" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
