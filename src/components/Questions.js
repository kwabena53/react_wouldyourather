import React from "react"
import {connect} from "react-redux"
import QuestionCard from "./QuestionCard"
import { formatQuestionData } from '../utils/helpers'

const Questions = ({ filteredQuestion, users, questions, type}) => {
        // console.log("Comman see: ", filteredQuestion)
        return(
            
            filteredQuestion.map((question)=> {
                let quest = questions[question]
                console.log('question to transform: ', quest.optionOne.text)
                console.log('formated: ', formatQuestionData(users, quest, type))
                 return <QuestionCard key={quest.id} data = {formatQuestionData(users, quest, type)}/>
            })
        )
}


function mapStateToProps({questions, users, authedUser}, {search, type}) {
    const sortedQuestionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
   

    return{
        filteredQuestion: sortedQuestionIds !== undefined 
        ? Object.values(sortedQuestionIds).filter((question) =>{ //filtering to get only the answered questions
            return search(questions, question, authedUser) //callback function to search for answered/ unanswered questions
            // questions[question] give you the question object
          })
        : [],
        users,
        questions
    }
}

export default connect(mapStateToProps)(Questions)