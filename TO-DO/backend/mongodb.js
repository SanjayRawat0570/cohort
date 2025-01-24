const mongoose = require('mongoose');
require('dotenv').config();
const url=process.env.DB_URL
  mongoose.connect(url)
  const todoSchema =new mongoose.Schema({
        title: String,
        description: String,
        completed: {
            type: Boolean,
            default: false  
        }
  })
    const Todo = mongoose.model('Todo', todoSchema);
    module.exports = {
        Todo,
    }
    
