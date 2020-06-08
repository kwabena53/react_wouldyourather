import {saveQuestion} from  "../utils/api"
import {formatQuestion} from  "../utils/api"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


export function handleAddQuestion(optionOneText, optionTwoText, authedUser){
  console.log("optionOneText: ", optionOneText)

  return (dispatch) => {
    // const question = formatQuestion({optionOneText, optionTwoText, authedUser})
    // console.log("question: ", question)
    console.log("Text: ", optionOneText, optionTwoText, authedUser)

    // const id = question[id]
    console.log("gyae saas: ",  authedUser)
    return saveQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser
    })
    .then((question)=> {
      console.log("Chale work o: ", question)
      dispatch(addQuestion(question))
    })
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question: question,
  }
}