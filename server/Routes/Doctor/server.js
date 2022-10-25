const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { request } = require('express');
const mongoose = require("mongoose")
const Record = require("./Models/Record")
const Patient = require("./Models/Patient")
// const Profile = require("./Models/Profile")

const router = express.Router()

// router.use(express.urlencoded({ extended: true }));
// router.use(express.json())
// router.use(bodyParser.text({type: 'text/plain'}))
// router.use(cors())

const url = "mongodb://localhost:27017/mern"
mongoose.connect(url)

router.get("/viewpatients", (req, res)=>{
    const arr = Record.find({},(err,data)=>{
        const result = data
        res.json({"patients" : result})
    })
})

router.post("/addreport", (req, res) => {
    const record = req.body;
    Patient.findOne({patientid: record.patientid },(err,dataparent)=>{
        console.log(dataparent)
        if(dataparent !== null){
            var id
            Record.find({}).sort({_id:-1}).limit(1).exec((err, data)=>{
                // console.log(data[0])
                if(data[0] !== undefined){
                    id = data[0]._id+1;
                }else{
                    id = 1;
                }
                Record.create({_id: id, patientid: dataparent.patientid, name: dataparent.name, age: dataparent.age, disease: record.disease},(err,data)=>{
                    if(err) throw err
                    res.redirect('/doctor/viewpatients')
                })
            })
        }else{
            res.json({"msg":"unsuccess"})
        }
        
        
    })

})

router.post("/deleterecord", async(req,res) =>{
    const id = req.body.id
    console.log(id)
    Record.deleteOne({_id: id},(err, data)=>{
        if(err) throw err
        res.redirect('/doctor/viewpatients')
    }).catch((err)=>{console.log(err)})

})

router.post('/updatereport',(req,res)=>{
    Record.updateOne({_id: req.body.recordid},{ disease: req.body.disease },(err, data)=>{
        if(err) throw err
        res.redirect('/doctor/viewpatients')
    }).catch((err)=>{console.log(err)})
})

// router.get('/viewdocprofile', (req, res)=>{
//     Profile.findOne({_id: req.body.id}, (err, data)=>{
//         if(err) throw err
//         res.json(data)
//     }).catch((err)=>{console.log(err)})
// })

module.exports = router