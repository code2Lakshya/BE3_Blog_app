const express=require('express');
const app=express();

app.use(express.json());

require('dotenv').config();

app.listen(process.env.PORT,()=>{
    console.log(`Server Started At Port: ${process.env.PORT}`);
})

app.get('/',(req,res)=>{
    res.send('Welcome Bhai Saare Nu!!');
})

const dbConnect=require('./config/database');
dbConnect();

const postRouter=require('./routes/postRoutes');
app.use('/api/v1',postRouter);