const BookSchema = require("../Model/BookSchema")



const AddBook = async(req,res)=>{
    try {
        const {title,author,summury} = req.body
        console.log(title,author,summury,"hello")
      const CreatedData = await BookSchema.create({title,author,summury})
      if(CreatedData){
        res.status(200).json({message:"Data Added Successfull",CreatedData})
      }else{
        res.status(401).json({message:"Something went wrong"})
      }
    } catch (error) {
        res.status(501).json({message:"Internal server error"})
    }
}

const ViewAllBooks =async (req,res)=>{
    try {
        const FoundedAllBooks = await BookSchema.find()
        if(FoundedAllBooks){
            res.status(200).json({message:"Books Founded Successfully",FoundedAllBooks})
        }else{
            res.status(401).json({message:"No Books Founded"})
        }
    } catch (error) {
        res.status(501).json({message:"Internal server error"})
    }

}

const ViewBookById =async (req,res)=>{
  try {
    const _id = req.query._id
    console.log(_id,"is getting");
     const FoundedBookById = await BookSchema.findById(_id)
     if(FoundedBookById){
        res.status(200).json({message:"Founded Book is sucessfull",FoundedBookById})
     }else{
        res.status(401).json({message:"Something went worng"})
     }
  } catch (error) {
    res.status(501).json({message:"Internal server error"})
  }
}

const UpdateBook =async (req,res)=>{
    try {
      const {_id,title,author,summury} = req.body
      const UpdatedData = await BookSchema.updateOne({_id:_id},{$set:{title:title,author:author,summury:summury}})
      if(UpdatedData){
        res.status(200).json({message:"Data is updated",UpdatedData})
      }else{
        res.status(401).json({message:"Something went wrong"})
      }
    } catch (error) {
       res.status(500).json({message:"Internal server error"}) 
    }
}

const Delete = async (req,res)=>{
    try {
        const _id = req.params._id
    const Deleted = await BookSchema.deleteOne({_id:_id})
    if(Deleted){
        res.status({message:"Deletion completed"})
    }else{
        res.status({message:"Something went wrong"})
    }      
    } catch (error) {
      res.status(501).json({message:"Internal sever error"})  
    }
    
}

module.exports = {
    AddBook ,
    ViewAllBooks,
    ViewBookById,
    UpdateBook,
    Delete

}