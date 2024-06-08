import express, { RequestHandler } from "express";
import client from "~/client";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
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

app.get("survey/:id", async (req, res) => {
  const survey = await client.survey.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ survey });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
