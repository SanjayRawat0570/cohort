const {Admin }= require('../db');
function adminmiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password

    })
    .then(function(value)
    {
        if(value){
            next();
        }
        else{
            res.status(401).json({
                message: "Unauthorized"
            })
        }
    });
}
module.exports = adminmiddleware;