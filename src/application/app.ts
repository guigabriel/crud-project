import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import useRouter from '../infra/routes/user.routes';
import ErrorHandler from '../infra/middlewares/Error';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/use', useRouter);
app.use(ErrorHandler.execute);

export default app;
