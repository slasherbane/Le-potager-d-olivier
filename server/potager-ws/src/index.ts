import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { Potager } from "./route/Potager";
//import { AuthRoute } from "./src/routes/AuthRoute";
//import { MydiscountRoute } from "./src/routes/MydiscountRoute";
//import { checkToken } from "./src/middlewares/auth.middleware";
//leprojet n'ai pas 100% opti ecrtaine chose peuvent devenir classe !
config(); //process.env
const app = express();

app.use(cors());

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json({limit: '350mb'}) );
app.use(bodyParser.urlencoded({
  limit: '350mb',
  extended: true,
  parameterLimit:30000
}));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,PATCH,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");

  next();
});

//app.use("/auth", AuthRoute);
//app.use("/app",checkToken)
app.use("/potager",Potager);
app.listen(process.env.PORT, () => {
  console.log(`Server run to http://localhost:${process.env.PORT}`);
});
