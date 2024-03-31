const db = require('../config/db');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isSuperior:{
        type:Boolean,
        required:true
    }
    
});

// used while encrypting user entered password
userSchema.pre("save",async function(){
    var user = this;
    if(!user.isModified("password")){
        return
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash;
    }catch(err){
        throw err;
    }
});


const UserModel = db.model('user',userSchema);

module.exports = UserModel;