import React from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
//import BorderPage from "./Borders";

function Forms(){
    return(
        <>
            <Container>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter Title" />
                </Form.Group>

                <Form.Group as={Col} controlId="Author Name">
                <Form.Label>Author Name</Form.Label>
                <Form.Control placeholder="Enter Author Name" />
                </Form.Group>
            </Form.Row>

                <Form.Group controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="Enter description" />
                </Form.Group>

        <Button variant="dark" type="submit">
            Submit
        </Button>
        </Form>
    </Container>

    </>

    )
}
export default Forms;