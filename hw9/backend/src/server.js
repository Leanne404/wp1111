import express from 'express';
import routes from './routes';
import cors from 'cors';
import db from './db';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

db.connect();
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

module.exports = app;
 