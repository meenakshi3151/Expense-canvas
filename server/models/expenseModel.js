const mongoose=require('mongoose');
const ExpenseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLenght:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:"expense"
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    file:{
        data:Buffer,
        contentType: String,
    }
},{timestamps:true})
const Expense = mongoose.model("Expense",ExpenseSchema)

module.exports = Expense;