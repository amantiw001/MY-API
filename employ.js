const mongoose = require("mongoose");

const employSchema = new mongoose.Schema({
    Employeename:{
        type:String,
        required:true,
    },
    Employeeage:{
        type:Number,
        required:true,
    },
    Employeequalification:{
        type:String,
        required:true,
    },
    Employeecity:{
        type:String,
        required:true,
    }
})

const Employ = new mongoose.model('Employ',employSchema);

module.exports = Employ;