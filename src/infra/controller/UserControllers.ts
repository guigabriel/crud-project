import { Request, Response, NextFunction } from 'express';
import UserService from '../../domain/usecase/UserService';
import User from '../../domain/entities/User';


export default class UserControllers {
  constructor(private userCase: UserService) { }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const user: Omit<User, 'id'> = {
      email: req.body.email,
      password: req.body.password,
      userName: req.body.username,
      role: 'User'
    };
    try {
      const result = await this.userCase.register(user);
      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const user: Pick<User, 'email' | 'password'> = {
      email: req.body.email,
      password: req.body.password
    };
    try {
      const findEmail = await this.userCase.findByUserEmail(user.email);
      if (findEmail === undefined) return res.status(404).json({ message: 'email not found' });

      const token = await this.userCase.login(user);
      return res.cookie('access_token', token, { httpOnly: true }).status(200).json(user.email);
    } catch (err) {
      next(err);
    }
  };

  public logout = async (_req: Request, res: Response) => {
    res.clearCookie('access_token', {
      sameSite: 'none',
      secure: true
    }).status(200).json('Logout');
  };
}
