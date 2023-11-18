const mongoose=require('mongoose');

require('dotenv').config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log('Database Connection Success'))
    .catch((error)=>{
        console.log('Database Connection Failed',error.message);
        process.exit(1);
    })
}