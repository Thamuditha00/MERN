const express = require("express");
const app = express()
const cors = require("cors")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const expressSession = require("express-session")

const userModel = require("./Routes/Admin/userSchema")
const adminRoute = require("./Routes/Admin/Admin");
const doctorRoute = require("./Routes/Doctor/server")
const managerRoute = require("./Routes/Manager/server")
const nurseRoute = require("./Routes/Nurse/server")
const labRoute = require("./Routes/Lab/server")
const pharmacyRoute = require("./Routes/Pharmacy/server")
const { session } = require("passport");

app.use(express.json())
app.use(cors())
app.use( expressSession({
    secret : "some secret key : 20345secrets54302",
    saveUninitialized: true,
    resave: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use("/admin", adminRoute)
app.use("/doctor", doctorRoute)
app.use("/manager", managerRoute)
app.use("/nurse", nurseRoute)
app.use("/lab", labRoute)
app.use("/pharmacy", pharmacyRoute)

passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())
passport.use(new localStrategy(userModel.authenticate()))




app.post("/login", (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.json( {message: "Either username or password is no given."})      
    }
    else {
        passport.authenticate("local", (err, user, info) => {
            if(err) {
                res.json({meassage: "login failed"})
            }
            else {
                if(!user) {
                    res.json({meassage: "username or password incorrect"})
                }
                else {
                    res.json({message: "Login is successfully" , user:user })
                }
            }
        }) (req,res)
    }
})



app.post("/register", async (req, res) => {
    console.log(req.body)
    userModel.register( new userModel({username: req.body.username, description: req.body.description}), req.body.password, (err, user) => {
        if (err) {
            res.send({message: "Failed to register user", err : err})
        }
        else {
            req.login(user, (err) => {
                if (err) {
                    res.send({message: "Failed to register user", err : err})
                }
                else {
                    res.send({message: "User registered successfully"})
                }
            })
        }
        

    })
})

app.post("/logout", (req,res) => {
    req.logout( (err) => {
        if (err) { return next(err) }

        res.send({messsage: "User logged out"})
    })
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log("Server is running on port 5000!")
    }
})