import React, {useState} from "react"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Menu from './Menu'
import Questions from "./Questions"
import {connect} from "react-redux"


const Home = () =>{

    const [isAnsweredQuestion, setToAnsweredQuestion] = useState({left:{clicked: false}, right:{clicked: true}});
    
   const  handleOnclickAnswered = () => {
        setToAnsweredQuestion({
            left: {clicked: true},
            right: {clicked: false},
        })
    }

   const  handleOnclickUnanswered = () => {
        setToAnsweredQuestion({
            left: {clicked: false},
            right: {clicked: true},
        })
    }

    const filterAnswered = (questions, question, authedUser) => {
        // console.log("Shyde: ", questions[question].optionOne.votes, questions[question].optionTwo.votes)
        // console.log("Socket " , questions[question].optionOne.votes !== [], questions[question].optionTwo.votes !== [] )
        return questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser) 
    }

    const filterUnanswered = (questions, question, authedUser) => {
        // console.log("look: ", Object.entries(question))
        return questions[question].optionOne.votes.includes(authedUser)  === false && questions[question].optionTwo.votes.includes(authedUser)  === false
    }
    return(
        <div>
            {/* <LoginPage/> */}
            {/* <QuestionCard/> */}
        {/* <AnsweredQuestions/> */}
        <Menu/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    <Card border="secondary" style={{ width: '30rem'}}>
                    <Card.Body>
                        <Nav justify variant="pills" defaultActiveKey="#">
                            <Nav.Item onClick={handleOnclickUnanswered}>
                                <Nav.Link href="#" >Unanswered Questions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item onClick={handleOnclickAnswered}>
                                <Nav.Link eventKey="link-1">Answered Questions</Nav.Link>
                            </Nav.Item>
                           
                        </Nav>

                        {/* displays Answered Questions */}
                        {isAnsweredQuestion.left.clicked &&(
                            <Questions search = {filterAnswered} type = "answered"/>
                        )}

                        {/* displays Unanswered Questions */}
                        {isAnsweredQuestion.right.clicked &&(
                            <Questions search = {filterUnanswered} type = "unanswered" />
                        )}

                    </Card.Body>
                       
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        
    )
}


export default connect()(Home)