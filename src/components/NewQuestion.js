import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Menu from './Menu'
import Form from 'react-bootstrap/Form'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import {connect} from "react-redux"
import {handleAddQuestion} from "../actions/questions"



const NewQuestion = ({dispatch, authedUser, history}) => {

    const [questionData, setResponseData] = useState("");

    const handleSubmitQuestion = (e) => {
        e.preventDefault()
        dispatch(handleAddQuestion(
            questionData.OptionOne,
            questionData.OptionTwo, 
            authedUser
        ))
        history.push('/')
        console.log("This was submitted: ", questionData)
    }

   const handleOptOneChange = (e) => {
       const target = e.target
       const name = target.name
        setResponseData({
            ...questionData,
            [name] : target.value
        })
   }
    return(
        <>
        <Menu activeKey="/add"/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    <Card border="secondary" style={{ width: '25rem' , height: '23em'}}>
                        <Card.Header className="justify-content-center heading" >Create New Question</Card.Header>
                        <p className="justify-content-center">Complete the question</p>
                        <Card.Body>
                        <Card.Title>Would You Rather...</Card.Title>
                        <Form id="myform" onSubmit={handleSubmitQuestion}>
                            <Form.Control className="wyr_inputField" name="OptionOne"  onChange={handleOptOneChange} placeholder="Enter option one text here" />
                            <p>OR</p>
                            <Form.Control className="wyr_inputField" name="OptionTwo" onChange={handleOptOneChange}  placeholder="Enter option two text here" />
                            <Link to="/">
                                <Button variant="secondary" onClick={handleSubmitQuestion} form="myform" size="lg"  block>
                                    submit
                                </Button>
                            </Link>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
      </>
    )
   
}

const mapStateToProps = ({authedUser }) =>{
    return {
        authedUser
    } 
}

export default connect(mapStateToProps)(NewQuestion)