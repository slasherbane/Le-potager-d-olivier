 import { Component } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import NavBar from "./NavBar";

export default class Template extends Component {


    render() {
        return (
            <div style={{height: "100%" }}>
                <div className="Haut de Page" style={{ textAlign: "center" }}>
                    <Container fluid>
                        <Row>
                            
                            <Col lg={10} style={{ fontWeight: 800 }}>
                                <NavBar />
                              <br/>
                                {this.props.children}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}