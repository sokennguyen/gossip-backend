const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/',async(request,response)=> {
    const users = await User
        .find({}).populate('chats',{createdBy:1,avatar:1,name:1,members:1,type:1,messages:1})
    response.json(users)
})

usersRouter.post('/',async(request,response)=> {
    const {username,name,password} = request.body
    
    const saltRound = 10
    const passwordHash = await bcrypt.hash(password,saltRound)

    const hashedUser = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await hashedUser.save()

    response.status(201).json(savedUser)
})

module.exports = usersRouter