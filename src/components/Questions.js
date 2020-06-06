import React from "react"
import {connect} from "react-redux"
import QuestionCard from "./QuestionCard"
import { formatQuestionData } from '../utils/helpers'

const Questions = ({ filteredQuestion, users, questions}) => {

        return(
            
            filteredQuestion.map((question)=> {
                let quest = questions[question]
                 return <QuestionCard key={quest.id} data = {formatQuestionData(users, quest)}/>
            })
        )
}


function mapStateToProps({questions, users}, {search}) {
    return{
        filteredQuestion: questions !== undefined 
        ? Object.keys(questions).filter((question) =>{ //filtering to get only the answered questions
            console.log(questions[question].optionOne.votes, questions[question].optionTwo.votes )
            return search(questions, question) //callback function to search for answered/ unanswered questions
            // questions[question] give you the question object
          })
        : [],
        users,
        questions
    }
}

export default connect(mapStateToProps)(Questions)