[[[]]]

const ExpenseSchema=require('../models/expenseModel')
const multer=require("multer")
exports.addExpense=async (req,res)=>{
    //destructuring the data which coming through the body of request
    const {title,amount,category,description,date,file}=req.body;
     console.log(file)
    const expense=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
        file
    })
    // conditions
    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'All fields are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:'Amount must be number and positive'})
        }
       if(file){
        const newfile=new ExpenseSchema({            file:{
                data:req.file.filename,
                contentType:'image/png'
            }
        })
        newfile.save()
        .then(()=>res.send("successfully uploaded"))
        .catch((err)=>console.log(err))
       }
        await expense.save()

        res.status(200).json({message:'Expense successfully Added'})
    }catch(error){
        res.status(500).json(expense)
    }
    console.log(expense)
}
exports.getExpenses=async(req,res)=>{
    try{
        const expenses=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }catch(error){
        res.status(500).json({message:'server side error'})
    }
    
}
exports.deleteExpense=async(req,res)=>{
    //get corresponding id to delete
    const {id}=req.params;
    ExpenseSchema.findByIdAndDelete(id)    
        .then((expense)=>{
            res.status(200).json({message:'Expense Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'server side error'})
        })
}
//storage...disk storage is to store the files according to us on the disk 
const storage=multer.diskStorage({
    destination:'uploads',
    //cb: callback
    filename:(req,file,cb)=>{
        cb(null,Date.now+file.originalname)
    }

});
exports.upload= multer(
    {
        storage:storage
    }
).single('testfile')

// exports.uploads=async (req,res)=>{
//     this.upload(req,res,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             const newFile=new ExpenseSchema
//         }
//     })
// }