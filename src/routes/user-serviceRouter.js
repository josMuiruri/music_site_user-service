const express = require('express');
const userController = require('./../controllers/user-serviceController')

const router = express.router();

router.param('id', userController.checkID)

router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

app.use('/api/v1/users', userRouter);