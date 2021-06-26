import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Data from "./Utils/Data";
import potagerService from "./Service/potager.service";
import $ from "jquery"
import { Col, Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Component/Homepage";
import SpecialRoute from "./Component/SpecialRoute"
import Test from "./Component/Test";
import LegumeSemaine from "./Component/LegumeSemaine";
import NosProduits from "./Component/NosProduits";
import QuiSommesNous from "./Component/QuiSommesNous";
import Recettes from "./Component/Recettes";
import Admin from "./Component/Admin";
import marché from "./Component/marché";

export default class App extends Component {
  ''


  componentDidMount() {
    potagerService.test().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    //$(".App").fadeIn()
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <SpecialRoute
            exact path={"/"}
            component={Homepage}
          />

          <SpecialRoute
            exact path={"/Test"}
            component={Test}
          />

          <SpecialRoute
            exact path={"/LegumeSemaine"}
            component={LegumeSemaine}
          />

          <SpecialRoute
            exact path={"/NosProduits"}
            component={NosProduits}
          />

          <SpecialRoute
            exact path={"/QuiSommesNous"}
            component={QuiSommesNous}
          />

          <SpecialRoute
            exact path={"/marché"}
            component={marché}
          />

          <SpecialRoute
            exact path={"/Recettes"}
            component={Recettes}
          />

          <SpecialRoute
            exact path={"/Admin"}
            component={Admin}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}
