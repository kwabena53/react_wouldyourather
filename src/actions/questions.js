import {saveQuestion, saveQuestionAnswer} from  "../utils/api"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


export function handleAddQuestion(optionOneText, optionTwoText, authedUser){

  return (dispatch) => {
   
    return saveQuestion({
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
        author: authedUser
    })
    .then((question)=> {
      dispatch(addQuestion(question))
    })
  }
}

export function handleAddQuestionAnswer(authedUser, qid, answer ){

  return (dispatch) => {
 
    return saveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer
    })
    .then((questionAnswer)=> {
      dispatch(addQuestionAnswer(authedUser, qid, answer))
    })
  }
}


export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question: question,
  }
}

export function addQuestionAnswer (authedUser, qid, answer ) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid: qid,
    authedUser: authedUser,
    answer: answer
  }
}