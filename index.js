const express = require("express");

//import DBconnection File
const DBconnection = require("./DatabaseConnection");

//import DB
const dotenv = require("dotenv");


//import routes
const usersRouter= require("./routes/users");
const booksRouter = require("./routes/books");


dotenv.config();

const app = express();

DBconnection();

const PORT = 8081;

app.use(express.json());

//npm i nodemon --save-dev
// const data=["srihari","dev"];

app.get("/", (req,res) =>{
    res.status(200).json({
        message:"server is up and running successfully",
    
    });
});

// http://localhost:8081/users/
app.use("/users", usersRouter);
app.use("/books",booksRouter);


app.get("*", (req, res) => {
    res.status(404).json({
      message: "This route doesn't exist",
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });