const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { request } = require('express');
const mongoose = require("mongoose")
const Patient = require("../Doctor/Models/Patient")

const router = express.Router()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// app.use(bodyParser.text({type: 'text/plain'}))
// app.use(cors())

const url = "mongodb://localhost:27017/mern"
mongoose.connect(url)

router.get("/viewpatients", (req, res)=>{
    const arr = Patient.find({},(err,data)=>{
        const result = data
        res.json({"patients" : result})
    })
})

router.post("/addpatient", (req, res) => {
    const record = req.body;
    Patient.findOne({patientid: record.patientid },(err,dataparent)=>{
        
        var id
        Patient.find({}).sort({patientid:-1}).limit(1).exec((err, data)=>{
            console.log(data[0])
            if(data[0] !== undefined){
                id = data[0].patientid+1;
            }else{
                id = 1;
            }
            Patient.create({_id: id, patientid: id, name: record.patientname, age: record.patientage, patientcontact: record.patientcontact},(err,data)=>{
                    if(err) throw err
                    res.redirect('/nurse/viewpatients')
                })
        })
    })   

})

router.post("/deletepatient", async(req,res) =>{
    const id = req.body.id
    console.log(id)
    Patient.deleteOne({_id: id},(err, data)=>{
        if(err) throw err
        res.redirect('/nurse/viewpatients')
    }).catch((err)=>{console.log(err)})

})

router.post('/updatepatient',(req,res)=>{
    console.log(req.body.patientid)
    Patient.updateOne({patientid: req.body.patientid},{ name: req.body.patientname , age: req.body.patientage, patientcontact: req.body.patientcontact},(err, data)=>{
        if(err) throw err
        res.redirect('/nurse/viewpatients')
    }).catch((err)=>{console.log(err)})
})

// app.listen(5000)
module.exports = router