const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const port = 3000;
const expenses = [];
app.get('/', (req, res) => {
  res.send(expenses);
});

app.post('/add', (req, res) => {
  expenses.push(req.body);
  //res.sendStatus(200);
  res.send(expenses);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
