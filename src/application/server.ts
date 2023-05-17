import 'dotenv/config';
import app from './app';
import connectionDataBase from '../utils/connection';

const PORT = 3001;

connectionDataBase
  .getConnection()
  .then(() => {
    app.listen(PORT, () => console.log(`App is runnig in port ${PORT}`));
  })
  .catch((error) => {
    console.log('connection with database generated an error: \r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
