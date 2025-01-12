const express = require('express');
const app = express();
app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId=req.query.kidneyId;
    if(username === "sanjay" && password === "rawat"){
        
        if(kidneyId==1 || kidneyId==2){
            res.json({
                message: "Welcome sanjay"
            })
        res.json({
            message: "your kidney is healthy"
        })
    }
}
res.status(401).json({
    message: "Invalid username or password"
})
    
})
app.listen(3002);