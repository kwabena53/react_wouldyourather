import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_QUESTION } from '../actions/questions'
// import { ADD_QUESTION_ANSWER } from '../actions/questions'





export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id] : action.question
      }
    // case ADD_QUESTION_ANSWER: 
    //   return {

    //   }
    default :
      return state
  }
}