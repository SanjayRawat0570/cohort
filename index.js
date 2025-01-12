const express = require('express');
const app = express();
var user = [{
    "name": "John Doe",
    kidneys: [{
        healthy : false
    }]

}];
app.use(express.json());
app.get("/", function(req, res) {
    const johnkidneys= user[0].kidneys;
    const numberofkidneys= johnkidneys.length;
    // filter
    let numberofHealthykidneys=0;
    for(let i=0; i<numberofkidneys; i++){
        if(johnkidneys[i].healthy){
            numberofHealthykidneys++;
        }
    }
    const numberofUnHealthykidneys = numberofkidneys - numberofHealthykidneys;
    res.json({
        johnkidneys,
        numberofkidneys,
        numberofHealthykidneys,
    })

    })
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({healthy: isHealthy})
    res.json({
        message: "Kidney added successfully"
    })
})
app.put("/", function(req, res) {
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
        
    }
    res.json({});
})
app.delete("/", function(req, res) {
    const newkidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push ({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({
        message: "Unhealthy kidneys removed successfully"
    })
})



app.listen(3002);