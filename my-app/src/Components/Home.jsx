import React from "react";
import Blogs from "./Blogs";
import Form from "./Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import BorderPage from "./Borders";
//import Alert from "react-bootstrap/Alert";

/*const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);*/

function Home () {
    return(

        <>
            <Container fluid>
                <br></br>
                <Row>
                    <Col lg="7"><Blogs/ ></Col>
                    <Col ><Form/ ></Col>
                </Row>
            </Container>
        </>
    )

}

export default Home;