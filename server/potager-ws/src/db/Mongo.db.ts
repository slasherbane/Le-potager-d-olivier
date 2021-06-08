import { MongoClient } from "mongodb";
import { connect, model, Model } from "mongoose";


const APP_CONFIG = {
  mongo: {
    hostString: "mongodb:27018/16101b0a6c113a7bd4234658fc644193",
    user: "username",
    db: "db_name",
  },
};

export default class MongoDb {
  static async open_orm_connexion() {
    return await connect(
      "mongodb://" +
        "16101b0a6c113a7bd4234658fc644193" +
        ":" +
        encodeURIComponent("dellos") +
        "@" +
        "11a.mongo.evennode.com:27018,11b.mongo.evennode.com:27018/16101b0a6c113a7bd4234658fc644193?replicaSet=eu-11",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );

    //  let Mod = model("User", UserSchema,"User");

    // await ProductModelSchema.create({name:"ee"}).then(async (doc)=>{ await doc.save()});
    //let cet = await Mod.create({ firstname: "u"});
    //await MongoDb.find_user();
    //console.log( await cet.save());
  }

  static async get(obj: any, ModelSchema: any): Promise<any> {
    return new Promise((resolve, reject) => {
      MongoDb.open_orm_connexion()
        .then((co) => {
          ModelSchema.findOne(obj).exec((err: any, data: any) => {
            if (data === null || data === undefined) {
              reject(err);
            }
            resolve(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  /*static async getAll(
    obj: any,
    ModelSchema: any,
    population: string[]
  ): Promise<any> {
    var test = ProductModelSchema.model.find();

    return new Promise((resolve, reject) => {
      MongoDb.open_orm_connexion()
        .then((co) => {
          var mod = ModelSchema.find(obj);
          population.forEach((pop) => {
            mod.populate(pop);
          });
          mod.exec((err: any, data: any) => {
            if (data === null || data === undefined) {
              reject(err);
            }
            resolve(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }*/






  static async open_connexion() {
    var mongoPassword = "dellos";
    const client = new MongoClient(
      "mongodb://" +
        "16101b0a6c113a7bd4234658fc644193" +
        ":" +
        encodeURIComponent("dellos") +
        "@" +
        "11a.mongo.evennode.com:27018/16101b0a6c113a7bd4234658fc644193",
      { useUnifiedTopology: true }
    );

    await client.connect();
    // const db = client.db("mydiscount");
    //const users = db.collection("user");
    return client;
  }

 


}