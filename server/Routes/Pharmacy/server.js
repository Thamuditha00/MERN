const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { request } = require('express');
const mongoose = require("mongoose")
const Medicine = require("./Models/Medicine")

const router = express.Router()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// app.use(bodyParser.text({type: 'text/plain'}))
// app.use(cors())

const url = "mongodb://localhost:27017/mern"
mongoose.connect(url)

router.get("/viewmedicine", (req, res)=>{
    const arr = Medicine.find({},(err,data)=>{
        const result = data
        res.json({"medicines" : result})
    })
})

router.post("/addmedicine", (req, res) => {
    const record = req.body;
    Medicine.findOne({MedicineCode: record.MedicineCode },(err,dataparent)=>{
        
        var id
        Medicine.find({}).sort({MedicineCode:-1}).limit(1).exec((err, data)=>{
            console.log(data[0])
            if(data[0] !== undefined){
                id = data[0].MedicineCode+1;
            }else{
                id = 1;
            }
            Medicine.create({_id: id, MedicineCode: id, MedicineName: record.MedicineName, ManufactureDate: record.ManufactureDate, ExpireDate: record.ExpireDate},(err,data)=>{
                    if(err) throw err
                    res.redirect('/pharmacy/viewmedicine')
                })
        })
    })   

})

router.post("/deletemedicine", async(req,res) =>{
    const id = req.body.id
    console.log(id)
    Medicine.deleteOne({_id: id},(err, data)=>{
        if(err) throw err
        res.redirect('/pharmacy/viewmedicine')
    }).catch((err)=>{console.log(err)})

})

router.post('/updatemedicine',(req,res)=>{
    console.log(req.body.MedicineCode)
    Medicine.updateOne({MedicineCode: req.body.MedicineCode},{ MedicineName: req.body.MedicineName , ManufactureDate: req.body.ManufactureDate, ExpireDate: req.body.ExpireDate},(err, data)=>{
        if(err) throw err
        res.redirect('/pharmacy/viewmedicine')
    }).catch((err)=>{console.log(err)})
})

// app.listen(5000)
module.exports = router