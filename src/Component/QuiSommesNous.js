import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap"

export default class QuiSommesNous extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <Container fluid>
                            <Row>
                                <Col><div style={{ marginTop: -5, marginLeft: 185, marginBottom: 20 }}><img src="desforges.jpg" style={{ height: 200, width: 200 }}></img></div></Col>

                                <Col><div style={{ marginLeft: 270, marginBottom: 20, height: 200, width: 200, backgroundColor: "orange" }}>
                                    <div style={{ fontFamily: "Arial", paddingTop: 50, fontSize: 30, color: "white" }}>100%<br />Local</div></div></Col>

                                <Col><div ><img src="ferme.jpg" style={{ marginLeft: 180, height: 200, width: 200, marginBottom: 50 }}></img></div></Col>
                            </Row>
                        </Container>
                    </Col>

                    <Col lg={6}>
                        <Container fluid>
                            <Row>
                                <Col><div style={{ height: 500, width: 700 }}><div style={{
                                    fontFamily: "Arial", textAlign: "left",
                                    marginRight: 100, fontSize: 16, marginTop: 50
                                }}>
                                    Le potager d'Olivier propose des légumes de saison toute l'année.<br /><br />
                                    Situé à Bouville au cœur du parc
                                    régional du Gâtinais nos légumes sont cultivés dans un esprit de liberté,<br />
                                    <br />Les laissant pousser à leur
                                    guise dans le respect de la nature et de l'environnement.
                                    Nous les élevons comme nos enfants,<br /> <br />
                                    Quand ils ont faim on les nourrit, quand ils sont malades on les soigne. <br />
                                    <br />
                                    Nous ne vendons qu'en circuit court, proche de nos clients
                                    nous aimons Présenter notre travail et
                                    expliquer notre quotidien au travers de portes Ouvertes.<br />
                                    <br />
                                    Olivier, le chef de culture s'occupe du plan des cultures,
                                    du semis et de la Plantation, de l'entretien
                                    des parcelles,<br /><br /> Du soin des plantes et de leur bien être.
                                    Il donne main forte à la cueillette.<br />
                                    <br />
                                    Isabelle, responsable des ventes, s'occupe du contact client,
                                    des Commandes, des préparations du
                                    planning cueillette et des livraisons.<br />
                                    <br />
                                    Maria, Cristina et Gorette nos ouvrières maraichères nous
                                    accompagnent Chaque jour, dans la
                                    cueillette, l'entretien, les préparations et
                                    elles ne Manquent pas de travail.<br /><br /> Leur énergie et leur bonne
                                    humeur illuminent nos journées parfois rudes.</div></div></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>



            </Container>
        )
    }
}