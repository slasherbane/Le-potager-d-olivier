import { Component } from "react";
import { Col, Container, Row, } from "react-bootstrap";

export default class NosProduits extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <Container fluid>
                            <Row>
                                <Col><div style={{ marginTop: -5, marginLeft: 130, marginBottom: 20 }}><img src="marché.jpg" style={{ height: 250, width: 250 }}></img></div></Col>

                                <Col><div style={{ marginLeft: 220, marginBottom: 20, height: 250, width: 250, backgroundColor: "#21CF23" }}>
                                    <div style={{ paddingTop: 60, fontSize: 35, color: "white", fontFamily: "Arial" }}>100%<br />Saison</div></div></Col>

                                <Col><div ><img src="panneau.jpg" style={{ marginLeft: 130, height: 250, width: 250 }}></img></div></Col>

                            </Row>
                        </Container>
                    </Col>

                    <Col lg={6}>
                        <Container fluid>
                            <Row>
                                <Col><div style={{ fontSize: 16, textAlign: "left", fontFamily: "Arial" }}>
                                    <div style={{ color: "#21CF23" }}>Vente à la ferme de Noncerve :<br /> <br /></div>
                                    <div style={{ fontSize: 12 }}>Vendredi, de 16h à 18h30 <br /> La ferme se situe sur la RN191 à hauteur de Mesnil Racoin (10km d’Etampes):<br />
                                        Mesnil Racoin suivre direction salle polyvalente et continuer 1 km, ferme isolée au milieu de la plaine <br /></div>
                                    <br />
                                    <div style={{ color: "#21CF23" }}>samedi matin sur le marché d’Auvers Saint Georges. Place de l’église<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}>Les p’tites cocottes d’Edith :<br /><br /></div>
                                    <div>Vente de pommes de terre en distributeur<br />
                                        Boutique ouverte vendredi fin de journée et samedi matin : légumes de saison<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}> La ruche qui dit oui : achat en ligne, retrait chez une hôtesse.<br /> <br /></div>
                                    <div>Ballancourt<br />
                                        Etampes<br />
                                        Dourdan<br />
                                        Grigny<br />
                                        Sainte Geneviève des bois<br />
                                        Marcousis<br />
                                        Vitry aux loges 45<br />
                                        Saint Jean de la Ruelle 45<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}>La ruche qui dit oui à la maison :
                                        <a href="https://alamaison.laruchequiditoui.fr/"
                                            target="_blank" style={{ fontSize: 14 }}>ici</a><br /> <br /></div>
                                    <div>Vente en ligne, livraison à domicile, Paris et petite couronne.<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}>La ruche qui dit oui : boutique<br /> <br /></div>
                                    <div>63 Rue Houdan, 92330 Sceaux<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}>Au bout du champs ABDC, boutique dans Paris : <a href="https://www.auboutduchamp.com/" target="_blank" style={{ fontSize: 14 }}>ici</a><br /><br /></div>
                                    <div>Rue Daguerre 75014<br />
                                        Rue Losseran 75014<br />
                                        Gare Montparnasse <br />
                                        Truffaut La Ville du Bois, chalet extérieur<br /></div>
                                    <br />
                                    <div style={{ color: "#21BB23" }}>Panier d’à côté, boutique et vente en ligne : <a href="https://www.drancyshopping.com/taxons/marchand/le-panier-da-cote" target="_blank" style={{ fontSize: 14 }}>ici</a><br /> <br /></div>
                                    <div>Drancy<br /> <br />
                                        Paris 75019<br /></div>
                                    <br />
                                    <div style={{ color: "#21CF23" }}>Astuce en vrac, boutique Montgeron<br /></div>
                                    <br />
                                    <div style={{ color: "#21CF23" }}>Un grain dans la ville, boutique, Juvisy<br /><br /></div>
                                </div>

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <br /> <br /> <br />

            </Container>
        )
    }
}