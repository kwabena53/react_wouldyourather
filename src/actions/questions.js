export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (users) {
  return {
    type: RECEIVE_QUESTIONS,
    users,
  }
}