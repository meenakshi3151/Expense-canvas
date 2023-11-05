const mongoose=require('mongoose');
// Connecting database
const db=async()=>{
    try{
        // mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        // console.log(process.env.MONGO_URL)
        console.log('Database connected')
    }catch(error){
        console.log(error)
        console.log('DB connection Error');
    }
}

module.exports={db};