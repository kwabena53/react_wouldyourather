import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  const AUTHED_ID = "tylermcginnis"
    return (dispatch) => {
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(setAuthedUser(AUTHED_ID))
        })
    }
  }