const express = require('express');
const jwt = require('jsonwebtoken');
const jwtpassword = "123456";
const app = express();
app.use(express.json());

const ALL_USERS = [{
    username: "sanjayrawat0570@gmail.com",
    password: "123456",
    name: "Sanjay Rawat",
},
{
    username: "rahulrawat4060@gmail.com",
    password: "909853",
    name : "Rahul Rawat",
},
];
function userExists(username,password){
    let userExists = false;
    for(let i=0; i<ALL_USERS.length; i++){  
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            userExists = true;
            break;
        }
    }
    return userExists;
    
}
app.post("/sigin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
         return res.status(401).json({
            message: "Invalid user in db",

        });
    }
    var token = jwt.sign({username: username}, jwtpassword);
        return res.json({
            token,
        });
    });
    app.get("/users", function(req, res){
        const token = req.headers.authorization;
        try{
            const decode = jwt .verify(token, jwtpassword);
            const username= decode.username;
            res.json({
                users: ALL_USERS,
            });
        }
        catch(error){
            return res.status(401).json({
                message: "Invalid token",
            });
        }
    });
    app.listen(3002);
