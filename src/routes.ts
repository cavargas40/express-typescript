import { Router } from 'express';
import { userRouter } from './components/user';

const router = Router();

router.use('/user', userRouter);

export default router;