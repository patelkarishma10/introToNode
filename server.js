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

app.delete("/deleteArray", (req, res) => {
    //let array = ['a', 'b', 'c', 'd']
    let pulled = _.pullAt(newArray, [1,3]);
    res.send(newArray);
});

app.put("/updateArray/:index", (req, res) => {
    //let index = req.body.index;
    let index = req.params.index;
    let num = req.body.num;
    //newArray.push(num1);
    _.set(newArray, index, num)
    res.send(newArray);
});
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));