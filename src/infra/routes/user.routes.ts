import { Router } from 'express';
import userController from '../factory/UserFactory';
const userRoutes = Router();



userRoutes.post('/register', userController.register);
userRoutes.post('/login', userController.login);
userRoutes.post('/logout', userController.logout);

export default userRoutes;
