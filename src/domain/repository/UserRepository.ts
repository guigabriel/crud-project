import User from '../entities/User';
import IUserPersistence from './IUserPersistence';

export default class UserRepository {
  constructor(private iPersistence: IUserPersistence) { }

  public register = async (entity: Omit<User, 'id'>)
    : Promise<Pick<User, 'id' | 'email' | 'userName' | 'role'>> => {
    return await this.iPersistence.register(entity);
  };

  public login = async (entity: Pick<User, 'email' | 'password'>) => {
    return await this.iPersistence.login(entity);
  };

  public findUserByEmail = async (email: string): Promise<User | undefined> => {
    return await this.iPersistence.findUserByEmail(email);
  };
}
