import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={6} className="text-center mx-auto order-2 order-md-1 d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-ext.png"/>
                    </Col>
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center order-1 order-md-2 text-white text-shadow">
                        <div>
                            <h2 className="mb-3 mt-5">
                                Why Shop With Us
                            </h2>
                            <p className="lead">
                                We offer a huge selection of products from top quality brands, all in one 
                                convenient place. We are passionate about our goal of bringing our fans 
                                across the globe access to their favorite team's gear. We pride ourselves 
                                on not only carrying a large selection of officially licensed products from 
                                the top brands, but also industry leading customer service, shipping and 
                                return policies.                       
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>      
        );
    }
}

export default AboutExt;