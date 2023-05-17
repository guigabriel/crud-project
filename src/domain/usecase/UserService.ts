import User from '../entities/User';
import UserRepository from '../repository/UserRepository';
import ValidateData from './validations/validateData';

export default class UserService {
  constructor(private repository: UserRepository) { }

  public register = async (entity: Omit<User, 'id'>)
    : Promise<Pick<User, 'id' | 'email' | 'userName' | 'role'>> => {
    const validations = new ValidateData();
    const isValid = validations.validation(entity);
    if (!isValid.isValid) {
      throw new Error(`Error: ${isValid.error.join(', ')}`);
    }
    if (await this.findByUserEmail(entity.email)) {
      throw new Error('Email is alredy regitered');
    }
    return await this.repository.register(entity);
  };

  public login = async (entity: Pick<User, 'email' | 'password'>) => {
    return await this.repository.login(entity);
  };

  public findByUserEmail = async (email: string): Promise<User | undefined> => {
    return await this.repository.findUserByEmail(email);
  };
}
