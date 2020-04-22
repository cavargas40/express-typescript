import { Router } from 'express';
import { createUser, getUser } from './user.controller';

export const userRouter = Router();

userRouter.route('/').post(createUser);
userRouter.route('/:id').post(getUser);

