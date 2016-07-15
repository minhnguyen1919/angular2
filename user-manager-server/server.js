var genId = require('./generate-id.js');
var _ = require('lodash-node');
var faker = require('faker');

var users = [];

for (var i = 50; i > 0 ; i--) {
  users.push({
    id: genId.generateUUID(),
    username: faker.name.findName(),
    address: faker.address.streetAddress(),
    age: faker.random.number(99),
    email: faker.internet.email()
  })
}

var delay = 300;


var http = require("http");
var url = require("url");

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function start(route) {
  function onRequest(request, response) {
    console.log(request.method);
    var pathname = url.parse(request.url).pathname;
    var params = url.parse(request.url).search;
    console.log("Request for " + pathname + " received.");
    console.log("Params:  " + params);
    console.log("Method: " + request.method);

    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    // response.writeHead(200, {"Content-Type": "text/plain"});
    response.writeHead(200, {"Content-Type": "application/json"});

    if (request.method === 'GET' && /^\/users/.test(pathname)) {

      if (params && /id/.test(params)) {
        var id = getParameterByName('id', params);
        console.log(id);
        var user = users.filter(function (user) {
          return user.id === id;
        })

        setTimeout(function () {
          response.write(JSON.stringify(user[0]));
          response.end();
        }, delay);
      } else {
        setTimeout(function () {
          response.write(JSON.stringify(users));
          response.end();
        }, delay);
      }


    }

    // ADD NEW USER
    if (request.method === 'PUT' && /^\/users\/.*$/.test(pathname)) {
      var id = pathname.substring(7, pathname.length);
      console.log('id');
      console.log(id);

      var body = "";
      request.on('data', function (chunk) {
        body += chunk;
        body = JSON.parse(body);
      });
      request.on('end', function () {
        // console.log('body: ' + body);
        // var jsonObj = JSON.parse(body);
        // console.log(jsonObj.$key);
      })

      console.log(body);

      setTimeout(function () {
        var index = _.findIndex(users, function (user) {
          return user.id === id;
        });
        console.log('body');
        users[index] = body;
        console.log(body);
        console.log('Users');
        console.log(users);

        response.write(JSON.stringify(users[index]));
        response.end();
      }, delay);
    }

    if (request.method === 'POST' && /^\/users$/.test(pathname)) {

      var body = "";
      request.on('data', function (chunk) {
        body += chunk;
      });
      request.on('end', function () {
        var jsonObj = JSON.parse(body);
      })

      console.log(body);

      setTimeout(function () {

        var newUser = JSON.parse(body);
        newUser.id = genId.generateUUID();
        users.push(newUser);

        response.write(JSON.stringify(users[users.length - 1]));
        response.end();
      }, delay);
    }

    if (request.method === "OPTIONS") {
      response.write(JSON.stringify({}));
      response.end();
    }



  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started.");
}

exports.start = start;
