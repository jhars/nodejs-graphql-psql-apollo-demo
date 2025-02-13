import express, { Request, Response } from "express";
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

const port = 5000;

app.listen(port, () => {
  console.log('App is now running at port ', port)
})