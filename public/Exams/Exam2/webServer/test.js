// fetch("http://localhost:3000/api/getmonths").then(data => data.json()).then(data => console.log(data))
fetch("http://localhost:3000/api/move/1/2",
    {
        method: "PUT"
    }
).then(data => data.json()).then(data => console.log(data))