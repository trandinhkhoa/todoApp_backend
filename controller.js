const db = require("./database").getDb();

// CREATE
async function createTask(req,res) {
  console.log(req.method, req.url);
  const collection = db.collection("todos");

  // TODO: use mongoDB objectId instead of my taskId
  let newDocument = {
    taskId: req.query.taskId,
    done: req.query.done
  }
  const result = await collection.insertOne(newDocument);
  let response = "createTask done:\n" + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}

// READ
async function getAllTasks(req,res) {
  console.log(req.method, req.url);
  const collection = db.collection("todos");

  const resultCursor = await collection.find({});
  const result = await resultCursor.toArray();
  let response = "getAllTasks done: count = " + result.length +  " =>\n " + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}

// localhost:3000/getTask/abc123
async function getTask(req,res) {
  console.log(req.method, req.url, req.params.taskId);
  const collection = db.collection("todos");

  const resultCursor = await collection.find({taskId: req.params.taskId});
  const result = await resultCursor.toArray();
  const response = "getTask done: " + result.length +  " =>\n " + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}

// UPDATE
async function updateTask(req,res) {
  console.log(req.method, req.url);
  const collection = db.collection("todos");

  const result = await collection.updateMany({taskId: req.query.taskId}, { $set: { done: req.query.done } });
  const response = "updateTask done:\n" + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}

// DELETE
// could have used route param like GET does.
// but here, for demonstrative purpose, I use query param
// localhost:3000/deleteTask?taskId=abc123
async function deleteTask(req,res) {
  console.log(req.method, req.url, req.query);
  const collection = db.collection("todos");

  const result = await collection.deleteMany({taskId: req.query.taskId});
  const response = "deleteTask done:\n" + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}

async function deleteAllTasks(req,res) {
  console.log(req.method, req.url);
  const collection = db.collection("todos");

  let result = await collection.deleteMany({});
  const response = "deleteAllTasks done:\n" + JSON.stringify(result, null, "  ");
  console.log(response);
  res.send(response);
}


module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
}