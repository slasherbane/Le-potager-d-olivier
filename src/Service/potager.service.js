import axios from "axios";
import Data from "../Utils/Data"

const instance = axios.create({
  method: "GET",
  baseURL: Data.url,
  headers: {
    //'Cache-Control': 'no-cache',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT,OPTIONS, DELETE, HEAD",
  },
});

export default {
  authenticate: (bLogin, bPassword) =>
    instance({
      method: "POST",
      url: Data.url + "users/authenticate",
      data: { login: bLogin, password: bPassword },
      transformResponse: [
        function (data) {
          const json = JSON.parse(data);
          return json;
        },
      ],
    }),
  registerUser: (
  data
  ) =>
    instance({
      method: "POST",
      url: Data.url + "users/register",
      headers: { Authorization: `Bearer ${localStorage.getItem("sob_token")}` },
      data: data,

      transformResponse: [
        function (data) {
          const json = JSON.parse(data);
          return json;
        },
      ],
    }),
    test: (code, data) =>
    instance({
      method: "GET",
      url: Data.url + "/test" ,
      //headers: { Authorization: `Bearer ${localStorage.getItem("sob_token")}` },
     // data: data,

      transformResponse: [
        function (data) {
          const json = JSON.parse(data);
          return json;
        },
      ],
    }),

};