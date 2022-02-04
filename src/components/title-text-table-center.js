import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-shadow">
                            <h2 className="dispaly-6 fw-bold text-white">
                                The Best Sales
                            </h2>
                            <p className="text-white">
                                Summer has finally arrived in London so it is time to refresh your wardrobe 
                                don't you think?! For summer shopping you are in the right place! London is 
                                packed of summer sales and you should probably take advantage of these great 
                                bargains. Timeout London has released a London Summer Sales guide to help you 
                                find a bunch of designer bargains and high street steals from clothes and
                                 accessories, swim and underwear, furniture, home products, cookware, and more! 
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-light">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;