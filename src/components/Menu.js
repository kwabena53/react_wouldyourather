import React, {Fragment} from "react"
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'

const Menu =({authedUser, user, dispatch, activeKey}) =>{

    // I don't understand why user renders undefined at first
    let name = null
    if(user !== undefined){
         name = user.name
    }

    const handleLogout = () => {
        dispatch(logOutUser())
    }

    return(
        <Nav
            className="justify-content-center"
            >
            <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/add">New Question</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  as={Link} to="/leaderboard">Leaderboard</Nav.Link>
            </Nav.Item>
            
            {authedUser  &&(
                <Fragment>
                    <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Hello {name}
                </Nav.Link>

                </Nav.Item>
                <Nav.Item onClick={handleLogout}>
                    <Nav.Link eventKey="link-2">Logout</Nav.Link>
                </Nav.Item>
                </Fragment>
            )} 
        </Nav>
    )
}

const mapStateToProps = ({authedUser, users}) =>{
    const user = users[authedUser]
    console.log("spy",user)
    return {
        authedUser : authedUser ? authedUser: false,
        user
    }
}

export default connect(mapStateToProps)(Menu)