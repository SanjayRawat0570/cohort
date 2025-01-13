const express = require('express');
const app = express();
app.use(express.json());
const port=3002;
const mongoose = require('mongoose');
mongoose .connect('mongodb+srv://sanjayrawat0570:7Sxaoj2LRCWDZyNO@cluster0.gxm0w.mongodb.net/test')
const user= mongoose.model('users',{name: String, email: String, password: String});
app.post("/sigin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const userExists = await user.findOne({email: email, password: password });
    if(userExists){
        return res.status(401).send({
            message: "user already exists",
        });
    }
const user1 = new user({name: name, email: email , password: password});   
    user1.save();
    res.json({
        message: "user created",
    });
    });

    app.listen(port,(req,res)=>{
        console.log(`Server is running on port http://localhost:${port}`);  
    });