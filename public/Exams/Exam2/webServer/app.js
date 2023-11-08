const { log } = require("console");
var express = require("express");
var app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

let data = {};

const fs = require("fs");
const serverSideStorage = "../data/db.json";

fs.readFile(serverSideStorage, function (err, buf) {
    if (err) {
        console.log("error: ", err);
    } else {
        data = JSON.parse(buf.toString());
    }
    console.log("Data read from file.");
});

function saveToServer(data) {
    fs.writeFile(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}


// TODO: Create your backend API here:
app.get("/api/getmonths", (req, res) => res.send(data))
app.put("/api/move/:fromindex/:toindex", (req, res) => {
    let from = req.query.fromindex
    let to = req.query.toindex
    let temp = data.months[from]
    data.months[from] = data.months[to]
    data.months[to] = temp
    saveToServer(data)
    console.log(data);
    res.json(data)
})
app.post("/api/setmonths", (req, res) => {
    data = req.body
    saveToServer(req.body)
    res.json(data)
})

app.listen(3000);