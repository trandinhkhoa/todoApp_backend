const controller = require("./controller")

function route(app) {
  // CREATE
  app.post("/createTask", controller.createTask)

  // READ
  app.get("/getAllTasks", controller.getAllTasks)

  // localhost:3000/getTask/abc123
  app.get("/getTask/:taskId", controller.getTask)

  // UPDATE
  app.post("/updateTask", controller.updateTask)

  // DELETE
  // could have used route param like GET does.
  // but here, for demonstrative purpose, I use query param
  // localhost:3000/deleteTask?taskId=abc123
  app.delete("/deleteTask", controller.deleteTask)

  app.delete("/deleteAllTasks", controller.deleteAllTasks)
}

// can also write as
// module.exports = route
// but then it has to be call like this
// const router = require("./router");
// router(app);
module.exports = {
  route
}