import React, {Fragment} from "react"
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'



const Menu =({authedUser, nameOfUser}) =>{

    return(
        <Nav
            className="justify-content-center"
            activeKey="/home"
            >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">New Question</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Leaderboard</Nav.Link>
            </Nav.Item>
            
            {authedUser  &(
                <Fragment className="justify-content-end">
                    <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Hello {nameOfUser}
                </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Logout</Nav.Link>
                </Nav.Item>
                </Fragment>
            )} 
        </Nav>
    )
}

const mapStateToProps = ({authedUser, users}) =>{
    const nameOfUser = users[authedUser]
    console.log("spy",nameOfUser)
    return {
        authedUser : authedUser ? authedUser: false,
        nameOfUser
    }
}

export default connect(mapStateToProps)(Menu)