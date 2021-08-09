import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center py-3 d-flex h-50vh maxh-600 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5">
                    <Col xs={12} md={5} className="mx-auto text-dark p-0 d-flex align-items-center text-end order-2 order-md-1">
                        <img alt="about"
                            className="img-fluid mx-auto ms-md-start w-50"
                            src="img/home/home-img.png"/>
                    </Col>
                    <Col xs={12} md={7} className="mx-auto text-dark p-0 d-flex align-items-center order-1 order-md-2">
                        <div className="p-5 text-md-start text-center text-shadow">
                            <h1 className="display-2 text-light fw-bold text-uppercase">
                                Summer 
                            </h1>
                            <h1 className="display-5 text-light fw-bold text-uppercase">
                                Collection
                            </h1>
                            <p className="text-white">
                                Because everything feels much better when the sun shines, let’s 
                                fast forward to summer so we can wear our new arrivals.
                            </p>
                            <p className="text-white">
                                Fancy a summer with the sea, sun &amp; green? This season our 
                                collection is expanding its eco friendly line with a new 
                                selection of new products to warm up the summer.
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;