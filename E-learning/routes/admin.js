const express = require("express");
const adminmiddleware = require("../middleware/admin");
const { Admin,Course } = require('../db');
const router = express.Router();
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  await  Admin.create({
        username : username,
        password : password
    })
    res.json({
        message: "Admin created"
    });



});
router.post('/courses', adminmiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    // console.log(newCourse);
    res.json({
        message: "Course created"
    });
    
});
router.get('/courses',  async(req, res) => {
    console.log("List of courses");
    const courses= await Course.findAll({});
    res.json({
        message: "List of courses",
        courses
    })
});
module.exports = router;