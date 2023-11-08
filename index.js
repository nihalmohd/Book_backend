const express  = require("express")
const dotenv = require("dotenv");
const { Database } = require("./Model/config");
const BookRouter = require("./Router/BookRouter");

const app = express()

dotenv.config()
app.use(express.json());

Database()
app.use("/",BookRouter)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server connected successfully on port " ,PORT);
})