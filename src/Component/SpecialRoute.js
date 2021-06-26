import React from "react";
import { Redirect, Route } from "react-router-dom";
import Template from "./Template";


const PrivateRoute = ({
  component: Component,
  admin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
   /*    var sign = JwtService.DoSigner();
        var perm = JwtService.permit() ? true : false;
        var auth = admin ? sign && perm : sign;*/

 //       if (auth) {
          return (
            <Template>
              <Component {...props} />
            </Template>
          );
 /*       } else {
          if (!perm && sign) {
            return <Redirect to="/NotFound" />;
          }
          return <Redirect to="/Sign-in" />;
        }*/
      }}
    />
  );
};

export default PrivateRoute;