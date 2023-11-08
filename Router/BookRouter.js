const { Router } = require("express");
const { AddBook, ViewAllBooks, ViewBookById, UpdateBook, Delete } = require("../Controller/BookContarller");



let BookRouter = Router();
 
BookRouter.get("/",(req,res)=>{
    console.log("this is working");
   res.send("Done:Working")
})

BookRouter.post("/AddData",AddBook)
BookRouter.get("/ViewBooks",ViewAllBooks)
BookRouter.get("/ViewBookById",ViewBookById)
BookRouter.put("/UpdateBook",UpdateBook)
BookRouter.delete("/DeletBook",Delete)






module.exports = BookRouter;