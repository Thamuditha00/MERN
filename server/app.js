const express = require("express");
const app = express()
const cors = require("cors")

const adminRoute = require("./Routes/Admin/Admin")

app.use(express.json())
app.use(cors())
app.use("/admin", adminRoute)

app.post("/login", (req, res) => {
    console.log(req.body)
    res.json({ "Authenticated": "true" })
    res.send()
})

app.get("/login", (req, res) => {
    res.send("elaaa")
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    else[
        console.log("Server is running on port 5000!")
    ]
})