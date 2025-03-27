import 'dotenv/config.js';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

export default app;
