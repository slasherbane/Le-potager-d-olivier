import { render } from "@testing-library/react"
import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"


export default class Homepage extends Component {


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{ paddingLeft: "250px", paddingBottom: "25px " }}><img src="accueil.jpg" style={{ height: 500, width: 800 }}></img></div>
                    </Col>
                </Row>

                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <div style={{ paddingLeft: "313px" }}><img src="légumes.jpg" style={{ height: 185, width: 185 }}></img></div>
                        </Col>

                        <Col lg={2}>
                        </Col>

                        <Col lg={1}>
                        </Col>

                        <Col>
                            <div style={{ marginLeft: "-70px", paddingRight: 100, height: 185, width: 185, backgroundColor: "orange" }}>
                                <div style={{ paddingTop: "40px", paddingLeft: "35px", fontSize: 35, color: "white", fontFamily: "Arial" }}>100%
                                    <br />Saison</div>
                            </div>
                        </Col>

                        <Col>
                            <div style={{
                                marginLeft: "-155px", paddingRight: 200, height: 185,
                                width: 365, backgroundColor: "#21BB23"
                            }}>
                                <div style={{
                                    height: 200, width: 365, textAlign: "left", paddingTop: "15px", paddingLeft: "10px",
                                    fontSize: 18, color: "white",
                                    fontFamily: "Arial"
                                }}>Bienvenue sur le Potager d'Olivier<br />
                                    <div style={{ fontSize: 14, paddingTop: "15px" }}>Vendredi : Ferme de Noncerve<br />
                                        <div style={{ fontSize: 16 }}> 16h à 18h30</div></div>
                                    <div style={{ fontSize: 14, paddingTop: "15px" }}>
                                        Samedi matin sur le marché d'Auvers Saint Georges <br />
                                        <div style={{ fontSize: 16 }}>
                                            de 8h30 à 12h30</div></div>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </Container>
                <Col>
                    <div style={{ marginLeft: 315, backgroundColor: "#21BB23", marginTop: 25, height: 100, width: 800 }}>
                        <br />
                        <div class="nav-item active" style={{ paddingLeft: 20, fontSize: 16 }}>
                            <Link className="nav-link" to="/Admin"><div style={{ color: "white" }}>Administration</div><span class="sr-only"></span></Link>
                        </div>
                    </div>
                </Col>

                <br /> <br /> <br />
            </Container>
        )
    }
}