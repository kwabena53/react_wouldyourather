import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Menu from './Menu'
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux"
import LeaderCard from "./LeaderCard"






const LeaderboardPage = ({users, sortedDataIds, data}) => {

    return(
        <>
        <Menu activeKey="/"/> <br/>
        <Container>
            <Row>
                <Col xl="12" sm="12" md="12" className="d-flex justify-content-center">
                    {Object.values(sortedDataIds).map((sortedDataIds, i) =>{
                        const myData= data[sortedDataIds]
                        return <LeaderCard key={myData.id} data = {myData} position = {i+1}/>
                    })}
                    
                </Col>
            </Row>
        </Container>
    </>
    )

  
}

function mapStateToProps ({users}){
    let userData = {}
   
      userData = Object.values(users).map((user)=>{
          const answerCount = Object.values(user.answers).length
          const questionCount = user.questions.length
          const total = questionCount + answerCount
         
          return {
                    'id': user.id,
                    'name': user.name,
                    'avatarURL': user.avatarURL,
                    'answerCount': answerCount,
                    'questionCount':  questionCount,
                    'total': total
                }
                        
         })

    return {
      users,
      data: userData,
      sortedDataIds:  Object.keys(userData)
      .sort((a,b) => userData[b].total - userData[a].total)
    }
  }
  
  export default connect(mapStateToProps)(LeaderboardPage)