import React, {useState} from 'react'
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
import {handleAddQuestionAnswer} from "../actions/questions"




const Radio = ({text, name, handleClick}) => {
    return(
        <Form.Check 
            type='radio'
            id={name}
            name="optionRadio"
            label={text}
            onClick = {handleClick}
        />
    )
}

const QuestionPage = ({question, user, dispatch, history}) => {
    const {optionOne, optionTwo} = question
    const {avatarURL, name} = user
    const [answer, setQuestionAnswer] = useState("")

    const handleOptionClick = (e) => {
        const target = e.target
        const name = target.name
        const option = target.id
        setQuestionAnswer({
             option
         })
         
    }

    const handleVote = (e) => {
        e.preventDefault()
        dispatch(handleAddQuestionAnswer(
            user, 
            question.id, 
            answer.option
        ))
        history.push(`/result/${question.id}`)
        console.log("selected ",answer.option)
    }

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
                                {/* <Form.Check 
                                    type='radio'
                                    id="optionOne"
                                    name="optionRadio"
                                    label={optionOne.text}
                                    onClick = {handleOptionClick}
                                    // defaultChecked
                                />
                                <Form.Check 
                                    type='radio'
                                    id="optionTwo"
                                    name="optionRadio"
                                    label={optionTwo.text}
                                    onClick = {handleOptionClick}
                                /> */}
                                    <Radio name="optionOne" handleClick={handleOptionClick} text={optionOne.text}/>
                                    <Radio name="optionTwo" handleClick={handleOptionClick} text={optionTwo.text}/>
                                </div>                                          
                                <Button  onClick={handleVote} variant="outline-secondary" size="sm" block>
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
      user,
    }
  }
  
  export default withRouter(connect(mapStateToProps)(QuestionPage))