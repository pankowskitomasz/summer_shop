import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 minh-50vh d-flex align-items-center py-3 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={6} className="text-center text-md-start p-4 d-flex align-items-center text-white text-shadow">
                        <div>
                            <h2 className="mb-3 mt-5 fw-bold">
                                How it started
                            </h2>
                            <p className="lead">
                                As an independent clothing brand focused on representing New York. We design 
                                and produce a wide range of limited edition clothing inspired by the nuances 
                                of the city, outdoors, and art &amp; design. Founded in 2007, our shop has 
                                grown into a globally recognized brand with a strong community. In addition 
                                to our seasonal collections, we collaborate and partner with city's municipalities, 
                                artists and brands on special projects.                         
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={6} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/about/about-desc.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutDesc;