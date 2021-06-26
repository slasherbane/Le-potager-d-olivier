import { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap"

export default class NavBar extends Component {
  render() {
    return (
      <Container fluid>
        <Row>

          <Col lg={6}>

            <div style={{ marginLeft: "350px" }}> <img src="LOGO_PotagerOlivier.png" style={{
              width: 100, height: 200, paddingTop: 15,
              paddingBottom: 15, borderRadius: "20px"
            }} /> </div>
          </Col>

          <Col lg={5}>
            <div style={{ marginTop: "60px", marginRight: "50px", fontSize: "40px", color: "#21BB23", fontFamily: "Arial", fontSize: 35 }}>Le Potager d'Olivier</div>
            <p style={{ marginRight: "45px", color: "#21BB23", fontFamily: "Arial", fontSize: 20 }}>situé à Bouville, Essonne 91</p>
          </Col>
          <div style={{ marginLeft: "260px" }}>

            <Col lg={12}>
              <nav class="navbar navbar-expand-lg navbar-light  " style={{
                backgroundColor: "white", color: "white", marginBottom: "- 0px",
                fontFamily: "Arial"
              }}>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active" style={{ paddingRight: 3, paddingLeft: 3, fontSize: 16 }}>
                      <Link className="nav-link" to="/"> <div style={{ color: "#21BB23" }}>Accueil</div>
                        <span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item active" style={{
                      paddingRight: 3, paddingLeft: 3, fontSize: 16,
                      backgroundColor: "#21BB23"
                    }}>
                      <Link className="nav-link" to="/LegumeSemaine" style={{ color: "white" }}>Légumes de la semaine
                        <span class="sr-only">
                        </span></Link>
                    </li>

                    {/*<li class="nav-item active" style={{ paddingRight: 10, paddingLeft: 10, fontSize: 13 }}>
                      <Link className="nav-link" to="/marché">Les Marchés<span class="sr-only"></span></Link>
                    </li>*/}

                    <li class="nav-item active" style={{ paddingRight: 3, paddingLeft: 3, fontSize: 16 }}>
                      <Link className="nav-link" to="/QuiSommesNous"> <div style={{ color: "#21BB23" }}> Qui sommes nous ? </div><span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item active" style={{ paddingRight: 3, paddingLeft: 3, fontSize: 16 }}>
                      <Link className="nav-link" to="/NosProduits"> <div style={{ color: "#21BB23" }}> Où trouver nos produits ? </div><span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item active" style={{ paddingRight: 3, paddingLeft: 3, fontSize: 16 }}>
                      <Link className="nav-link" to="/Recettes"> <div style={{ color: "#21BB23" }}> Les Recettes </div><span class="sr-only"></span></Link>
                    </li>

                    {/*<li class="nav-item active" style={{ paddingRight: 2, paddingLeft: 2, fontSize: 16 }}>
                    <Link className="nav-link" to="/Admin">Administration<span class="sr-only"></span></Link>
                    </li>*/}

                  </ul>
                </div>




              </nav>
            </Col>

            <Col><div style={{ backgroundColor: "#21BB23", height: 1, width: 925 }}></div></Col>

          </div>
        </Row>
      </Container>

    )
  }
}