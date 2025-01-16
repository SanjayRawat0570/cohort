const { Router} = require("express");
const  router = Router();
const { Course, User } = require('../db');
const usermiddleware = require("../middleware/user");

router.post('/signup', (req, res) => {
 const username = req.body.username;
    const password = req.body.password;
    res.json({
        message: "User created"
    });

});

router.get('/courses',  async (req, res) => {
    const response = await Course.findAll();
    res.json({
        message: "List of courses",
        response
    });
  
});
router.post('/courses/: courseId', 
    usermiddleware, async(req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;
  await User.updateOne({
        username: username
    }, {
        $push: {
            courses: courseId
        }
    }).catch(function (err) {
        if (err) {
            res.status(400).json({
                message: "Course not found"
            });
        }
    });
    res.json({
        message: "Course purchased"
    });
});
router.get('/purchasedcourses', usermiddleware, async(req, res) => {
await User.findOne({
    username: req.headers.username 
});
const courses = await Course.find({
    __courseId: {
        "$in": user.purchasedCourses
    }
});
res.json({
    courses: courses
})
});

module.exports = router;