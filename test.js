const http = require("http")

// async function testCreateTask() {
// function testCreateTask() {
//   let options = {
//     hostname: "localhost",
//     port: 3000,
//     path: "/createTask",
//     method: "POST"
//   }

//   let req = http.request(options, res => {
//     console.log("\n---testCreateTask---");
//     console.log("statusCode: ", res.statusCode);

//     // process.stdout.write vs console.log
//     https://stackoverflow.com/questions/35454716/node-stream-buffers-in-console-log-vs-process-stdout-write
//     res.on("data", d => {
//       process.stdout.write(d);
//     });
//   });

//   req.on('error', error => {
//     console.error(error);
//   });

//   req.end();
// }

// // function testGetAllTasks() {
//   options = {
//     hostname: "localhost",
//     port: 3000,
//     path: "/getAllTasks",
//     method: "GET"
//   }

//   req = await http.request(options, res => {
//     console.log("\n---testGetAllTasks---");
//     console.log("statusCode: ", res.statusCode);

//     // process.stdout.write vs console.log
//     https://stackoverflow.com/questions/35454716/node-stream-buffers-in-console-log-vs-process-stdout-write
//     res.on("data", d => {
//       process.stdout.write(d);
//     });
//   });

//   req.on('error', error => {
//     console.error(error);
//   });

//   req.end();
// // }

// // function testGetTask() {
//   options = {
//     hostname: "localhost",
//     port: 3000,
//     path: "/createTask/abc123",
//     method: "GET"
//   }

//   req = await http.request(options, res => {
//     console.log("\n---testGetTask---");
//     console.log("statusCode: ", res.statusCode);

//     // process.stdout.write vs console.log
//     https://stackoverflow.com/questions/35454716/node-stream-buffers-in-console-log-vs-process-stdout-write
//     res.on("data", d => {
//       process.stdout.write(d);
//     });
//   });

//   req.on('error', error => {
//     console.error(error);
//   });

//   req.end();
// }

// // async function test() {
// //     await testCreateTask();
// //     await testGetAllTasks();
// //     await testGetTask();
// // }

// testCreateTask();
// // test();
// nodejs https.request is a stream. I am more familiar with promise so axios for now
const axios = require('axios');

function testCreate() {
  return axios
    .post('http://localhost:3000/createTask', {})
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
      console.log(res.data);
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
    .post('http://localhost:3000/updateTask', {})
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
  await testDeleteAllTasks();
  await testCreate();
  await testGetTask();
  await testGetAllTasks();
  await testUpdateTask();
  await testDeleteTask();
  await testDeleteAllTasks();
  console.log("DONE Testing...")
}

test();