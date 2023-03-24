import express from "express";
const app = express();
import tasks from "./routes/tasks.js";
import connectDB from "./db/connect.js";

//middleware
app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')      -get all the tasks
// app.post('/api/v1/tasks')     -create a new task
// app.get('/api/v1/tasks/:id')  -get single tasks
// app.patch('/api/v1/tasks/:id')    -update task
// app.delete('/api/v1/tasks'/:id)   -delete task

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start()