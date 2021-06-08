import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Data from "./Utils/Data";
import potagerService from "./Service/potager.service";

export default class App extends Component {


  componentDidMount(){
    potagerService.test().then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
