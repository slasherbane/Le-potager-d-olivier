//import { AuthController } from "../controller/AuthController";
import { Router } from "express";
import { LegumeController } from "../controller/LegumeController";
//import { registerMidd, loginMidd } from "../middlewares/auth.middleware";
//import ProductController from "../controller/ProductController";
//import CategoryController from "../controller/CategoryController";
//import { checkCommand } from "../middlewares/command.middleware";
//import CommandController from "../controller/CommandController";

const route: Router = Router();

//route.post("/test", AuthController.test);

//route.post('/login', loginMidd, AuthController.login)
//route.post('/register', registerMidd, AuthController.register)
route.get("/test", LegumeController.test);
/*route.get("/product/:product", ProductController.getProduct);

route.get("/categories", CategoryController.getAllCategory);

route.put("/command/add", checkCommand, CommandController.addCommand);
route.get("/command/user", CommandController.getAllCommandForUser);
route.delete("/command/:command", CommandController.deleteCommand);
route.get("/user/image", AuthController.getUserImage);*/

export { route as Potager };