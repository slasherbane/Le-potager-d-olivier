import { decode, sign } from "jsonwebtoken";
//import MongoDb from "../db/Mongo";

//import PasswordException from "../exception/PasswordException";
//import User from "../models/User";

//import { JWTSecurity } from "../security/JWTsecurity";
import { model } from "mongoose";
//import UserModelSchema from "../models/UserModelSchema";
//import { bearer } from "../utils/JwtUtil";

export class LegumeController {
  static test = async (req: Request, res: any) => {
    let data: any = req.body;

    return res.status(200).json({ error: false, message: "otest legumes" }).end();
  };
}
