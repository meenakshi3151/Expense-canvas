

const IncomeSchema=require('../models/incomeModel')

exports.addIncome=async (req,res)=>{
    //destructuring the data which coming through the body of request
    const {title,amount,category,description,date}=req.body;
    const income=IncomeSchema({
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
        await income.save()
        res.status(200).json({message:'Income successfully Added'})
    }catch(error){
        res.status(500).json({message:'server side error'})
    }

    console.log(income)
}
exports.getIncomes=async(req,res)=>{
    try{
        const incomes=await IncomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message:'server side error'})
    }
    
}
exports.deleteIncome=async(req,res)=>{
    //get corresponding id to delete
    const {id}=req.params;
    IncomeSchema.findByIdAndDelete(id)

        .then((income)=>{
            res.status(200).json({message:'Income Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'server side error'})
        })
}