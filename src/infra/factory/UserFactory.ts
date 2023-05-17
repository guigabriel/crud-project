import IUserPersistence from '../../domain/repository/IUserPersistence';
import UserRepository from '../../domain/repository/UserRepository';
import UserService from '../../domain/usecase/UserService';
import UserControllers from '../controller/UserControllers';
import { UserPersistenceMysqlAdapter } from '../persistence/UserPersistence';

const userPersistence: IUserPersistence = new UserPersistenceMysqlAdapter();
const userRepository = new UserRepository(userPersistence);
const userService = new UserService(userRepository);
const userController = new UserControllers(userService);

export default userController;
