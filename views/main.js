const express = require('express');
const morgan = require('morgan');
const morgon = require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const Studnet=require('./models/Student');
const { urlencoded } = require('express');


//using expresss
const app = express();
const mdburl='';
mongoose.connect(mdburl,{useNewUrlParser: true,useUnifiedTopology:true})
.then((result)=>app.listen(4000))
.catch((err)=>console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

//static file
app.use(express.static('views'));
app.get('/', (req, res) => {
 
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  Studnet.find().sort({createdAt:1})
  .then((result)=>{
       res.render('index',{data:result})
  })
  .catch((err)=>{console.log(err);})
  });

  app.post('/index',(req,res)=>{
    const student= new Studnet(req.body)
  
    //saving it
    student.save()
    .then((result)=>{
      res.redirect('/index');
  
    })
    .catch((err)=>{
      console.log(err)
    })
  });




app.get('/create',(req,res)=>{
    res.render('signup');
});
