const http = require("http")
// nodejs https.request is a stream. I am more familiar with promise so axios for now
const axios = require('axios');

function testCreate() {
  return axios
    .post('http://localhost:3000/createTask?taskId=abc123&done=false', {})
        .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function testGetTask() {
  return axios
    .get('http://localhost:3000/getTask/abc123', {})
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function testGetAllTasks() {
  return axios
    .get('http://localhost:3000/getAllTasks')
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function testUpdateTask() {
  return axios
    .post('http://localhost:3000/updateTask?taskId=abc123&done=true', {})
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function testDeleteTask() {
  return axios
    .delete('http://localhost:3000/deleteTask?taskId=abc123', {})
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

function testDeleteAllTasks() {
  return axios
    .delete('http://localhost:3000/deleteAllTasks', {})
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log("\t***", res.data);
    })
    .catch(error => {
      console.error(error);
    });
}

async function test() {
  console.log("Testing...")
  await testCreate();
  await testGetTask();
  await testGetAllTasks();
  await testUpdateTask();
  await testDeleteTask();
  await testDeleteAllTasks();
  console.log("DONE Testing...")
}

test();