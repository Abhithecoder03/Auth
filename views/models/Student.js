const mongoose=require('mongoose');
const { stringify } = require('querystring');
const Schema=mongoose.Schema;
 const Studentschema=new Schema({
    name:{
        type:String,
    required: true
    },
    surname:{
        type:String,

    },
    mobo:{
        type:String,
    },
    password:{
        type:String
    },
    gender:{
        type:String,
        possibleValues: ['blue','red','yellow']

    },
    class:{
        type:String
    },
    school:{
        type:String
    },
    marks:{
        type:String
    },
    state:{
        type:String
    }

    
 },{timestamps:true});
const Student=mongoose.model('Student',Studentschema);
module.exports=Student;