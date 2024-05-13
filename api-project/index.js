const express = require('express');

const app = express();
const connect = require('./connection');
const course = require('./routes/course')
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:false
}));

connect();
app.use(course);

app.listen(3000,(error)=>{
    if(error){
        console.log(error,'error..')
    }else{
        console.log('Server is running on 3000');
    }
})