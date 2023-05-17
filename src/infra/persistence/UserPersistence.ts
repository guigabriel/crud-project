import IUserPersistence from '../../domain/repository/IUserPersistence';
import User from '../../domain/entities/User';
import { ResultSetHeader } from 'mysql2';
import db from '../../utils/connection';
import jwt from 'jsonwebtoken';

export class UserPersistenceMysqlAdapter implements IUserPersistence {

  public login = async (entity: Pick<User, 'email' | 'password'>) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const values = entity.email;

    const [data] = await db.execute(query, [values]);
    const [user] = data as User[];

    const passwordIsCorrect = entity.password === user.password;

    if (!passwordIsCorrect) throw new Error('Password is incorrect');

    const token = jwt.sign({ id: user.id }, 'jwkey');

    return token;
  };

  public register = async (entity: Omit<User, 'id'>)
    : Promise<Pick<User, 'id' | 'email' | 'userName' | 'role'>> => {

    const query = 'INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)';
    const values = [entity.email, entity.userName, entity.password, entity.role];

    const [result] = await db.execute<ResultSetHeader>(query, values);

    const newUser: Pick<User, 'id' | 'email' | 'userName' | 'role'> = {
      id: result.insertId,
      email: entity.email,
      userName: entity.userName,
      role: entity.role
    };

    return newUser;
  };

  public findUserByEmail = async (email: string): Promise<User | undefined> => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const values = email;
    const [data] = await db.execute(query, [values]);
    const [user] = data as User[];
    return user ?? undefined;

  };
}
