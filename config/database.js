const mongoose=require('mongoose');

require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('DB CONNECTION SUCCESS'))
    .catch(error=>{
        console.log('SERVER CONNECTION FAILURE');
        console.log(error.message);
        process.exit(1);
    })
}
module.exports=dbConnect;