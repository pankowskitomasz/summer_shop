import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferFull extends Component{
    render(){
        return(          
            <Container fluid className="minh-100vh bg-offer">     
                <Row className="mx-0 w-100">
                    <Col xs={12}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OfferFull;