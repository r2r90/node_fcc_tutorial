import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://root:root@taskmanagerproject.pyo7uwn.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
