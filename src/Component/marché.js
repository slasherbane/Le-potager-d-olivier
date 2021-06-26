import { Component } from "react";
import { Col, Container, Row, } from "react-bootstrap";

export default class marché extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div style={{
                            height: 300, width: 200, backgroundColor: "#A24936"
                            , border: "2px solid white", marginLeft: 275 , borderRadius: "5px"
                        }}><div style={{fontSize : 10 , paddingLeft : 50 , paddingTop : 25}}>Information Marché</div><label
                            style={{
                                transform: "rotate(-90deg)", color: "white", fontSize: 35,
                                textAlign: "end", position: "absolute", marginTop: "10vh"
                                , marginLeft: "-23vh"
                            }}> DIMANCHE</label></div>          

                    </Col>
                </Row>
            </Container>

        )
    }
}