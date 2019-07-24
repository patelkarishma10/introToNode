const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World from express");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let sum = num1 + num2;
    res.send(`${num1} + ${num2} = ${sum}`);
});
let newArray = [];

app.post("/createArray", (req, res) => {
    let num1 = req.body.num1;
    newArray.push(num1);
    res.send(newArray);
});

app.delete("/deleteArray/:num", (req, res) => {
    let num = req.params.num;
    let pulled = _.pull(newArray, num);
    res.send(newArray);
});

app.put("/updateArray/:oldNum", (req, res) => {
    let num = req.body.num;
    let oldNum = req.params.oldNum;
    let pos = newArray.indexOf(oldNum);
    _.set(newArray, pos, num)
    res.send(newArray);
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));