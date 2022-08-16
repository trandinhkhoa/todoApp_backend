// CREATE
function createTask(req,res) {
  console.log(req.method, req.url);
  res.send("task created");
}

// READ
function getAllTasks(req,res) {
  console.log(req.method, req.url);
  res.send("all tasks returned");
}

// localhost:3000/getTask/abc123
function getTask(req,res) {
  console.log(req.method, req.url, req.params.taskId);
  let response = "Task " + req.params.taskId + " returned";
  res.send(response);
}

// UPDATE
function updateTask(req,res) {
  console.log(req.method, req.url);
  res.send("task udpated");
}

// DELETE
// could have used route param like GET does.
// but here, for demonstrative purpose, I use query param
// localhost:3000/deleteTask?taskId=abc123
function deleteTask(req,res) {
  console.log(req.method, req.url, req.params.taskId, req.query);
  let response = "Task " + req.query.taskId + " deleted";
  res.send(response);
}

function deleteAllTasks(req,res) {
  console.log(req.method, req.url);
  res.send("all tasks deleted");
}


module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
}