const billSchema=require('../models/billModel')


exports.addBill=async(req,res)=>{
    const {title,amount,date,category}=req.body;
    const Bills= billSchema({
        title,
        amount,
        date,
        category
    })
    try{
        if(!title || !category || !amount || !date){
            return res.status(400).json({message:'All fields are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:'Amount must be number and positive'})
        }
        await Bills.save()
        res.status(200).json({message:'Bill successfully Added'})
    }catch(error){
        res.status(500).json({message:'server side error'})
    }
    console.log(Bills);
}


exports.getBill=async(req,res)=>{
    try{
        const bills=await billSchema.find();
        res.status(200).json(bills);
    }catch(error){
        res.status(500).json({message:'server side error'});
    }
    
}

exports.deleteBill=async(req,res)=>{
    const {id}=req.params;
    billSchema.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json({message:'Successfully Deleted the bill'})
        })
        .catch((err)=>{
            res.status(500).json({messsage:'Server Side error'})
        })
}