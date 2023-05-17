import User from '../../entities/User';

interface Validate {
  isValid: boolean;
  error: string[]
}

export default class ValidateData {
  public validation(data: Omit<User, 'id' | 'role'>): Validate {
    const err: string[] = [];

    if (!data.email || !data.userName || !data.password)
      err.push('Fields cannot be empty');
    if (data.email.length > 40) err.push('Email is too long');
    const result: Validate = {
      isValid: err.length === 0,
      error: err
    };
    return result;
  }
}
