import express from 'express';
import routes from './routes';
import cors from 'cors';
import db from './db';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

app.use('/', routes);
app.use(cors());
app.use(express.json());


db.connect();
 