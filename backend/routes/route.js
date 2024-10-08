const express = require("express");
const taskController = require("../controller/taskController")
const router = express.Router()


router.post("/add",taskController.createTodo)
router.get('/get',taskController.getTodo)
router.put("/update/:id",taskController.Update)
router.delete("/delete/:id",taskController.delete)

module.exports = router