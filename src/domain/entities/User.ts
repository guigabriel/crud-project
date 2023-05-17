export default class User {
  id: number;
  userName: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.id = 0;
    this.userName = '';
    this.email = '';
    this.password = '';
    this.role = '';
  }
}
