import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'


const QuestionCard = ({data}) => {

    return(
       
            <Card border="secondary" className="myCard"  style={{ width: '27rem' , height: '13em'}}>
                <Card.Header className="heading" >{data.author} asks</Card.Header>
                <Card.Body>
                {/* <Card.Title>Sign In</Card.Title> */}
                <Row>
                    <Col sm={12} lg={3} md={6}>
                        <Image src={data.authorImage} className="fit-image" roundedCircle />
                    </Col>
                    <Col sm={12} lg={9} md={6}>
                        <h5>Would you rather</h5>
                        <p>{data.text}</p>
                        <Link to={`/question/${data.id}`} >
                            <Button variant="outline-secondary" size="sm" block>
                                View Poll
                            </Button>
                        </Link>
                        
                    </Col>
                </Row>
                </Card.Body>
            </Card>
           )
   
}

export default QuestionCard