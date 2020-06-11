import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'





const ErrorPage = ({history}) => {
    const handleClick = (e) =>{
        e.preventDefault()
        console.log("clicked")
         history.push('/')
    }

    return (
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="">
                    <h1>404</h1>
                    <h4>ERROR</h4>
                        <Button  onClick={handleClick} variant="outline-secondary" size="sm" block>
                            GO TO SIGN IN
                        </Button>                        
                </Col>
               
            </Row>
        </Container>
    )
}


export default ErrorPage