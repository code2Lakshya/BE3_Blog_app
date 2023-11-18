const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());

const blogRouter=require('./routes/blog');
app.use('/api/v1',blogRouter);

app.listen(process.env.PORT,()=> console.log('server started at port: ',process.env.PORT));
app.get('/',(req,res)=>res.send('BLOG APP'))

const {dbConnect}=require('./config/database');
dbConnect();