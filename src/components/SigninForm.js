import React, { useState } from "react";
import UsersDropdown from "./UsersDropdown"
import Button from 'react-bootstrap/Button'
import { setAuthedUser } from '../actions/authedUser'
import {connect} from "react-redux"


const SigninForm = () => {

    const [userData, setUserData] = useState("");

    const handleSignin = (e) => {
        
        e.preventDefault()

        const { dispatch} = this.props

        dispatch(setAuthedUser(userData))

        console.log("I was selected", userData)

    }

    return(
        <>
            <UsersDropdown setUserData = {setUserData}/>
            <Button variant="secondary" size="lg" onClick={handleSignin} block>
                SIGN IN
            </Button>
        </>
    )
}

const mapStateToProps = ({users }) =>{
    return {
        users : users ? users : []
    } 
}
export default connect(mapStateToProps)(SigninForm)