import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'must provide a name'],
    trim: true,
    maxLength: [20, 'name can not be more than 20 characters']
  },
  completed: {
    type:Boolean,
    default: false
  },
});


const Task = mongoose.model('Task', TaskSchema)

export default Task