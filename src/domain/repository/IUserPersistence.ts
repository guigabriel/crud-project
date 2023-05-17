import User from '../entities/User';

export default interface IUserPersistence {
  register(entity: Omit<User, 'id'>): Promise<Pick<User, 'id' | 'email' | 'userName' | 'role'>>
  login(entity: Pick<User, 'email' | 'password'>): any
  findUserByEmail(email: string): Promise<User | undefined>
}
