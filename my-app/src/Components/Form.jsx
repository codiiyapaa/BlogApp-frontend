import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
//import BorderPage from "./Borders";

function Forms(){
    const [blogPost, setBLog] = useState({
        title: '',
        author: '',
        desc: ''
    });

    const handleChange= (e)=>{
        setBLog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit =(e)=>{
        if(blogPost.title.trim()!=="" && blogPost.author.trim()!=="" && blogPost.desc.trim()!==""){

        }else{
            window.alert("One of the Fields is empty");
        }
    }



    return(
        <div style={{
            border: '2px solid black',
            textAlign: 'left',
            display: 'flex' 
        }}>
            <Container>
            <Form bg="dark" 
                border="secondary" 
                text="white"
            >
            <Form.Row>
                <Form.Group as={Col} controlId="Title">
                <Form.Label column="lg" >Title</Form.Label>
                <Form.Control className="input" name="title" value={blogPost.title} onChange={handleChange} size="lg" placeholder="Enter Title" />
                </Form.Group>

                <Form.Group as={Col} controlId="Author Name">
                <Form.Label column="lg">Author Name</Form.Label>
                <Form.Control className="input" name="title" value={blogPost.title} onChange={handleChange} size="lg" placeholder="Enter Author Name" />
                </Form.Group>
            </Form.Row>

                <Form.Group controlId="Description">
                <Form.Label column="lg">Description</Form.Label>
                <Form.Control className="input" name="title" value={blogPost.title} onChange={handleChange} as="textarea" rows={3} size="lg" placeholder="Enter description" />
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 4, offset: 8, Order: "first"}}>
                    <Button type="submit" variant="dark" onClick={onSubmit}  size="lg" block>Submit</Button>
                    </Col>
                </Form.Group>
        </Form>
    </Container>

    </div>

    )
}
export default Forms;