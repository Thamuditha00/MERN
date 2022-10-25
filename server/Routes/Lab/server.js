const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { request } = require('express');
const mongoose = require("mongoose")
const Report = require("./Models/Report")
const Patient = require("../Doctor/Models/Patient")

const router = express()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// app.use(bodyParser.text({type: 'text/plain'}))
// app.use(cors())

const url = "mongodb://localhost:27017/mern"
mongoose.connect(url)

router.get("/viewtestreports", (req, res)=>{
    const arr = Report.find({},(err,data)=>{
        const result = data
        res.json({"patients" : result})
    })
})

router.post("/addtestreport", (req, res) => {
    const record = req.body;
    // console.log(record)
    Patient.findOne({patientid: record.patientid },(err,dataparent)=>{
        
        var id
        Report.find({}).sort({_id:-1}).limit(1).exec((err, data)=>{
            console.log(data[0])
            if(data[0] !== undefined){
                id = data[0]._id+1;
            }else{
                id = 1;
            }
            
            Report.create({_id: id, patientid: dataparent.patientid, name: dataparent.name, age: dataparent.age, testName: record.testName},(err,data)=>{
                if(err) throw err
                res.redirect('/lab/viewtestreports')
            })
        })
        
    })

})

router.post("/deletetestreport", async(req,res) =>{
    const id = req.body.id
    console.log(id)
    Report.deleteOne({_id: id},(err, data)=>{
        if(err) throw err
        res.redirect('/lab/viewtestreports')
    }).catch((err)=>{console.log(err)})

})

router.post('/updatetestreport',(req,res)=>{
    Report.updateOne({_id: req.body.recordid},{ testName: req.body.testName },(err, data)=>{
        if(err) throw err
        res.redirect('/lab/viewtestreports')
    }).catch((err)=>{console.log(err)})
})

// app.listen(5000)
module.exports = router