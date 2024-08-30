const express = require('express')
const app = express();
const fs = require("fs");
const router = require("./routes/routes");
const dbConnection = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173',
    exposedHeaders: ['Authorization'],
    credentials: true,
  }));

dbConnection();

app.use(express.json());


app.use('/api/v1',router)


app.get("/", (req, res) => {
    res.send("Welcome to the Quiz API!");
})

app.use((err, req, res, next) => {
    let log;
    log = err.stack;
    log += `/n${req.method} - ${req.url} - ${req.ip} - ${new Date()}/n`;
    fs.appendFile("error.txt", log, (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.status(500).send("Something went wrong");
});
  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})