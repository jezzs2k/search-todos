// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set("view engine", "pug");

const todos = [
  { id: 1, do: "Nau com" },
  { id: 2, do: "an com" },
  { id: 3, do: "Di ngu" }
];

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render("./index.pug");
});

app.get("/todos", (req, res) => {
  res.render("./todos/index.pug", {
    todos
  });
});

app.get("/todos/search", (req, res) => {
  const q = req.query.p;
  
  const matchTodo = todos.filter(
    todo => todo.do.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  
  res.render("./todos/index.pug", { todos: [...matchTodo] });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
