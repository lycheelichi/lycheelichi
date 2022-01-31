const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const slugify = require("slugify");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true,"Must have a username"],
        unique:true
    },
    firstName:{
        type:String,
        trim:true,
        required:[true, "must have a first name"]
    },
    lastName:{
        type:String,
        trim:true,
        required:[true,'Must have a last name']
    },
    email:{
        type:String,
        required:[true,"Please add an email address"],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email number']
    },
    telNum:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"Must have a password"],
        minlength:8,
        select:false
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:['user','admin']
    },
    profilePhoto:{
        type:String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    createdAt:{
        type:Date,
        default: Date.now
    }
})

UserSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.getSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})