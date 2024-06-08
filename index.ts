import express, { RequestHandler } from "express";
import client from "~/client";

const app = express();

app.use(express.json());

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

const rootRouteHandler: RequestHandler = async (_req, res) => {
  const surveys = await client.survey.findMany();
  res.json({ surveys });
};

app.get("/", rootRouteHandler);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
