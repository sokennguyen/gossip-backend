const mongoose = require('mongoose')
const Chat = require('../models/chat')
const chatsRouter = require('express').Router()

chatsRouter.get('/',async(request,response)=>{
    const chats = await Chat
        .find({}).populate('user',{username:1,name:1,avatar:1})
})