// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set('view engine', 'pug')

const todos = [
  {id: 1, do: 'Nấu cơm'},
  {id: 2, do: 'Ăn cơm'},
  {id: 3, do: 'Đi ngủ'}
];

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render('./index.pug');
});

app.get('/todos', (req, res) =>{
  res.render('./todos/index.pug', {
    todos
  })
})

app.get('/todos/search', (req, res) => {
  const q = req.query;
  console.log(q)
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
