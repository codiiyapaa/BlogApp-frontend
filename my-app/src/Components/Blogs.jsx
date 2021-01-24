import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
//import CardDeck from 'react-bootstrap/CardDeck';
//import Col from "react-bootstrap/Col";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);


function Blogs(){

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const dataFetch = async() => {
            try{
                const headers = {
                    "Access-Control-Allow-Origin": "*"
                }
                const res = await axios.get("https://blogapp-test.herokuapp.com/api/blogs", headers);
                console.log(res.data);
                if(res.data){
                    setBlogs(res.data);
                }
            }
            catch(error){
                console.log(error);
            }
            
        }
        dataFetch();


    }, [])

    return (
        <> 
        <Container>
            <Row>
            {blogs ? (
                <>
                    {blogs.map((blog) => (
                        <Card bg="dark" 
                        border="white" 
                        className="blog-card" 
                        style={{ width: '17rem' }}
                        text="white"
                        >
                            <ColoredLine color="white" />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <ColoredLine color="white" />
                                <Card.Text>
                                    {blog.desc}
                                </Card.Text>
                            </Card.Body>
                            <ColoredLine color="white" />
                            <Card.Footer className="text-muted">- {blog.author}</Card.Footer>
                        </Card>
                    ))

                    }

                </>
            ) : (
                <></>
            )
            }
            {/*<Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                   
                </Card.Body>
            </Card>*/}
            </Row>
        </Container>
        </>
    )
}
export default Blogs;