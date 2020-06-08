import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Menu from './Menu'
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"




const Radio = ({text, name}) => {
    return(
        <Form.Check 
            type='radio'
            id="default-radio"
            name={name}
            label={text}
        />
    )
}

const QuestionPage = ({question, user}) => {
    const {optionOne, optionTwo} = question
    const {avatarURL, name} = user
    return(
        <>
        <Menu activeKey="/"/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    <Card border="secondary" className="myCard"  style={{ width: '27rem' , height: '13em'}}>
                        <Card.Header className="heading" >{name} asks</Card.Header>
                        <Card.Body>
                        {/* <Card.Title>Sign In</Card.Title> */}
                        <Row>
                            <Col sm={12} lg={3} md={6}>
                                <Image src={`/${avatarURL}`} className="fit-image" roundedCircle />
                            </Col>
                            <Col sm={12} lg={9} md={6}>
                                <h5>Would you rather</h5>
                                <div key="default-radio" className="mb-3 right">
                                    <Radio text={optionOne.text} name="question"/>
                                    <Radio text={optionTwo.text} name="question"/>
                                </div>                                          
                                <Button variant="outline-secondary" size="sm" block>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
    )

  
}

function mapStateToProps ({questions, users},  props ) {
    const { id } = props.match.params
    
  const question = questions[id]
  const user = users[question.author]
  console.log(user.avatarURL)
  
    return {
      question,
      user
    }
  }
  
  export default withRouter(connect(mapStateToProps)(QuestionPage))