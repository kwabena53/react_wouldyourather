import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Menu from './Menu'
import SigninForm from './SigninForm.js'


const LoginPage = () => {

    return(
        <>
        <Menu/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    <Card border="secondary" style={{ width: '25rem' , height: '20em'}}>
                        <Card.Header className="justify-content-center heading" >Welcome to Would You Rather App</Card.Header>
                        <p className="justify-content-center">Sign in to continue</p>
                        <Card.Body>
                        <Card.Title>Sign In</Card.Title>
                        <SigninForm/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
      </>
    )
   
}

export default LoginPage