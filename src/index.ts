import express, { Request, Response } from "express";
import process from 'process';

require('dotenv').config();

const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is now running in ${process.env.NODE_ENV} environment running at port ${port}`)
})