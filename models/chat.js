const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    avatar:String,
    name:String,
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    type:{
        type:Number,
        required:true,
        min:0,
        max:2
    },
    messages:[{
        content:{
            type:String,
            required:true
        },
        sentBy:{
            type:String,
            required:true
        },
        readBy:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }]
    }]
})

chatSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Chat',chatSchema)