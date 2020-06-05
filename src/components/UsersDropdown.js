import React from "react"
import Form from 'react-bootstrap/Form'
import {connect} from "react-redux"



const UserOption = ({name, userId}) => {
return(
    <option value={userId}>{name}</option>
    )
}

const UsersDropdown = ({users, setUserData}) =>{

   const handleChangeOption = (event) => {
        setUserData(event.target.value)
    }

    return (
     <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select User</Form.Label>
            <Form.Control as="select"  onChange={handleChangeOption}>
            <option  defaultValue >Select User</option>
            {
                Object.keys(users).map((user, keyIndex) =>{
                    return <UserOption key={users[user].id} userId={users[user].id} name={users[user].name}/>
                  })
            }
            </Form.Control>
        </Form.Group>
     </Form>
       
    )

}

const mapStateToProps = ({users}, {setUserData}) =>{
    return {
        users : users ? users : []
    } 
}


export default connect(mapStateToProps)(UsersDropdown)