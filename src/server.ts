import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
	res.send('The setup is finally done');
});

import userRouter from './routes/users';
app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`This server is runnit at: http://localhost:${port}`);
});
