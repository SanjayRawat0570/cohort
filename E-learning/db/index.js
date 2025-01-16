const mongoose = require('mongoose');
const { string } = require('zod');
mongoose.connect("mongodb+srv://sanjayrawat0570:7Sxaoj2LRCWDZyNO@cluster0.gxm0w.mongodb.net/E-learning")
    const Adminschema = new mongoose.Schema({
      username: String,
        password: String  
    });
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'course'}]
    });
    const courseSchema = new mongoose.Schema({
        title : String,
        description : String,
        imageLink: String,
        price: Number

    });
    const Admin = mongoose.model('Admin', Adminschema);
    const User = mongoose.model('User', UserSchema);
    const Course = mongoose.model('Course', courseSchema);
    module.exports = {
        Admin,
        User,
        Course
    }