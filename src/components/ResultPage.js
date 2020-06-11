import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Menu from './Menu'
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"






const ResultPage = ({question, user, option}) => {
    const {optionOne, optionTwo} = question
    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const totalVotes = optionTwoVotes + optionOneVotes

    const optionOneText = optionOne.text
    const optionTwoText = optionTwo.text

    const {avatarURL, name} = user
    let optionOneSelected = ""
    let optionTwoSelected = ""
    
    if(option === "optionOne"){
        optionOneSelected = "optionSelected"
    }else{
        optionTwoSelected = "optionSelected"
    }
    return(
        <>
        <Menu activeKey="/"/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    <Card border="secondary" className="myCard"  style={{ width: '27rem' , height: '18em'}}>
                        <Card.Header className="heading" >{name} asks</Card.Header>
                        <Card.Body>
                        {/* <Card.Title>Sign In</Card.Title> */}
                        <Row>
                            <Col sm={12} lg={3} md={6}>
                                <Image src={`/${avatarURL}`} className="fit-image" roundedCircle />
                            </Col>
                            <Col sm={12} lg={9} md={6}>
                                <h3>Results: </h3>
                                <div className={optionOneSelected}>
                                    <h6>{`Would you rather ${optionOneText}?` }</h6>
                                    <p>{`${optionOneVotes} of ${totalVotes} representing ${(Math.round((optionOneVotes/totalVotes) * 100))}%`}</p>  
                                </div>
                                <div className={optionTwoSelected}>
                                    <h6>{`Would you rather ${optionTwoText} ?`}</h6>
                                    <p>{`${optionTwoVotes} of ${totalVotes} representing ${(Math.round((optionTwoVotes/totalVotes) * 100))}%`}</p>
                                </div>
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

function mapStateToProps ({questions, users, authedUser},  props ) {
    const { id } = props.match.params
    
  const question = questions[id]
  const user = users[question.author]
  const authedUserDetails = users[authedUser]
  const option = authedUserDetails.answers[id]
  
    return {
      question,
      user,
      option
    }
  }
  
  export default withRouter(connect(mapStateToProps)(ResultPage))