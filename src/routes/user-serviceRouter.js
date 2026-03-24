const express = require('express');
const userController = require('./../controllers/user-serviceController')
const userRouter = express.router();

userRouter.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

userRouter.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

app.use('/api/v1/users', userRouter);