const express = require("express");
const app = express()

app.post("/login", (req, res) => {
    console.log(res.json)
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    else[
        console.log("Server is running on port 5000!")
    ]
})