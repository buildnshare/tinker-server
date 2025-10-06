import express from 'express';
import dotenv from 'dotenv';
import { sendMail } from './mailer.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.render('core');
});

app.post('/send-mail', async (req, res) => {
  const data = req.body;
  const info = await sendMail(data);
  res.status(200).send(info);
});

app.listen(port, () =>
  console.log('server running')
);
