import express from "express";
const app = express();
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from 'dotenv'

//middleware
app.use(express.json());
dotenv.config()
//routes

app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/v1/tasks", tasks);


const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start()