import express from 'express';
import {getUser, getUsers, createUser, updateUser, deleteUser} from '../controllers/Users.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


export default userRouter;