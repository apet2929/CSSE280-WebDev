const { log } = require("console");
var express = require("express");
var app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

const fs = require("fs");
const serverSideStorage = "./public/Exams/Exam2/data/db.json";

let readMonths = async () => {
    fs.readFile(serverSideStorage, function (err, buf) {
        if (err) {
            console.log("error: ", err);
            return []
        } else {
            return JSON.parse(buf.toString());
        }
    });
}


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
app.get("/api/getmonths", async (req, res) => {
    const data = await readMonths()
    res.json(data)
})

app.put("/api/move/:fromindex/:toindex", async (req, res) => {
    console.log("Moving");
    let data = await readMonths()
    let from = parseInt(req.params.fromindex)
    let to = parseInt(req.params.toindex)

    let temp = data[from]
    data[from] = data[to]
    data[to] = temp

    saveToServer(data)

    console.log(data);
    res.json({foo: "bar"})
})

app.post("/api/setmonths", (req, res) => {
    data = req.body
    saveToServer(req.body)
    res.json(data)
})

app.listen(3000);