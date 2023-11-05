

const ExpenseSchema=require('../models/expenseModel')

exports.addExpense=async (req,res)=>{
    //destructuring the data which coming through the body of request
    const {title,amount,category,description,date}=req.body;
    const expense=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    // conditions
    try{
        if(!title || !category || !description || !date){
            return res.status(400).json({message:'All fields are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:'Amount must be number and positive'})
        }
        await expense.save()
        res.status(200).json({message:'Expense successfully Added'})
    }catch(error){
        res.status(500).json({message:'server side error'})
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