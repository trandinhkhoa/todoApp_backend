function route(app) {
  // CREATE
  app.post("/createTask", (req,res) => {
    console.log(req.method, req.url);
    res.send("task created");
  })

  // READ
  app.get("/getAllTasks", (req,res) => {
    console.log(req.method, req.url);
    res.send("all tasks returned");
  })

  // localhost:3000/getTask/abc123
  app.get("/getTask/:taskId", (req,res) => {
    console.log(req.method, req.url, req.params.taskId);
    let response = "Task " + req.params.taskId + " returned";
    res.send(response);
  })

  // UPDATE
  app.post("/updateTask", (req,res) => {
    console.log(req.method, req.url);
    res.send("task udpated");
  })

  // DELETE
  app.delete("/deleteAllTasks", (req,res) => {
    console.log(req.method, req.url);
    res.send("all tasks deleted");
  })

  // could have used route param like GET does.
  // but here, for demonstrative purpose, I use query param
  // localhost:3000/deleteTask?taskId=abc123
  app.delete("/deleteTask", (req,res) => {
    console.log(req.method, req.url, req.params.taskId, req.query);
    let response = "Task " + req.query.taskId + " deleted";
    res.send(response);
  })
}

// can also write as
// module.exports = route
// but then it has to be call like this
// const router = require("./router");
// router(app);

module.exports = {
  route
}