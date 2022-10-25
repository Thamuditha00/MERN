const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { request } = require('express');
const mongoose = require("mongoose")
const Ward = require('./Models/Ward');

const router = express.Router()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json())
// app.use(bodyParser.text({type: 'text/plain'}))
// app.use(cors())

const url = "mongodb://localhost:27017/mern"
mongoose.connect(url)

router.get("/viewward", (req, res)=>{
    const arr = Ward.find({},(err,data)=>{
        const result = data
        res.json({"wards" : result})
    })
})

router.post("/addward", (req, res) => {
    const record = req.body;
    // console.log(record)
    Ward.findOne({wardid: record.wardid },(err,dataparent)=>{
        
        var id
        Ward.find({}).sort({wardid:-1}).limit(1).exec((err, data)=>{
            console.log(data[0])
            if(data[0] !== undefined){
                id = data[0].wardid+1;
            }else{
                id = 1;
            }
            Ward.create({_id: id, wardid: id, wardName: record.wardName, BedCount: record.BedCount, freeBedCount: record.freeBedCount},(err,data)=>{
                    if(err) throw err
                    res.redirect('/manager/viewward')
                })
        })
    })   

})

router.post("/deleteward", async(req,res) =>{
    const id = req.body.id
    console.log(id)
    Ward.deleteOne({_id: id},(err, data)=>{
        if(err) throw err
        res.redirect('/manager/viewward')
    }).catch((err)=>{console.log(err)})

})

router.post('/updateward',(req,res)=>{
    console.log(req.body.wardid)
    Ward.updateOne({wardid: req.body.wardid},{freeBedCount: req.body.freeBedCount},(err, data)=>{
        if(err) throw err
        res.redirect('/manager/viewward')
    }).catch((err)=>{console.log(err)})
})

// app.listen(5000)
module.exports = router