import express from 'express';
   const app = express();
   const port = process.env.PORT || 4000;
   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });
   app.listen(port, () =>
     console.log(`Example app listening on port ${port}!`),
);

import cors from 'cors';
app.use(cors());

app.use(express.json());
 