
HTTP request: where to put params ?
 query param
 GET /cars?color=blue
 route param (as part of the url ?
 GET /cars/:id
 in payload ?
https://stackoverflow.com/questions/25385559/rest-api-best-practices-args-in-query-string-vs-in-request-body
https://stackoverflow.com/questions/4024271/rest-api-best-practices-where-to-put-parameters
https://stackoverflow.com/questions/30967822/when-do-i-use-path-params-vs-query-params-in-a-restful-api

When to use PUT ? when to use POST ?



MongoDB
collection = table
document = record/row


most browsers have runtimes which run js
nodejs is a runtime running outside of browser
many browsers' runtimes use V8 engine. nodejs use V8 as well.

browser runtimes vs nodejs

Both browser JS engine and node have access to the same core JS features.

Browser JS on top of that has access to the UI part of the browser like HTML element handles and UI events (clicks, input changes etc.)

Node does not have access to that as it has no UI, instead it has access to IO modules (file system, http, process, os), and several additional standard libraries (path, crypto ).

See the API documentation for what you get in node but not in a browser:

https://nodejs.org/dist/latest-v16.x/docs/api/


Why use js runtime outside of browser (e.g. nodejs, deno, etc.) ?
you could code server and client with a single language.
With a Mongo database and node.js on the backend and javascript on the client, you have javascript objects being passed all the way from the DB to the client without having to convert them to anything else. It can be super convenient.

Also node is pretty lightweight, fast and scalable. Plenty of fun tests and benchmarks online you can find but that leads a lot of people towards learning it.

It's also asynchronous, so if you have:

function1(); function2();

You can't always guarantee that function 1 will 100% finish before function2 is done. This can be a headache for people new to the language but can lead to some pretty amazing stuff for people well versed. Again, plenty of articles on the google for this as well :)

The difference is in that Node can do some of the things that a browser cannot, such as accessing the file system. This makes Node useful for running things such as servers and other applications that you want to run in standalone mode, not inside a browser.

Applications such as Slack, Discord, VSCode, WhatsApp, Skype and many others that are running as native desktop apps, do so via Electron which is based on Node. The servers that power sites like Reddit are also often based on Node.



process.stdout.write =>
javascript stream
javascript pipe

// "controllers" — functions that separate out the code to route requests from the code that actually processes requests.
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes