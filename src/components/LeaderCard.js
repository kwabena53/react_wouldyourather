import React from "react"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'




const LeaderCard = ({data, position}) => {
    return (
        <Card border="secondary" className="myCard"  style={{ width: '27rem' , height: '13em'}}>
        <Card.Header className="heading" >{data.name} : Position {position}</Card.Header>
        <Card.Body>
        {/* <Card.Title>Sign In</Card.Title> */}
        <Row>
            <Col sm={12} lg={3} md={6}>
                <Image src={data.avatarURL} className="fit-image" roundedCircle />
            </Col>
            <Col sm={12} lg={9} md={6}>
                <p> <b>Questions:</b>  {data.questionCount}</p>
                <p><b>Answers:</b> {data.answerCount}</p>
                <Button variant="primary" >
                    Total <Badge variant="light">{data.total}</Badge>
                    <span className="sr-only">unread messages</span>
                 </Button>
            </Col>
        </Row>
        </Card.Body>
    </Card>
    )
}


export default LeaderCard