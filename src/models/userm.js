const mongoose=require('mongoose')
const validator=require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true,
        lowercase:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },
    mobile:{
        type:Number,
        unique:true,
        minlength:10,

    }
})



const User = mongoose.model('User', userSchema)
module.exports=User