import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionPage from "./QuestionPage"
import LeaderboardPage from "./LeaderboardPage"
import NewQuestion from "./NewQuestion"
import LoginPage from "./LoginPage"



class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {authedUser} = this.props
    return (
      <Router>
        <div className="App">
          {
            authedUser
            ?
            <div>
            <Route path='/' exact component={Home} />
            <Route path='/question:id' component={QuestionPage}/>
            </div>
            :
              <LoginPage/>
          }
        
         {/* <LeaderboardPage path='/leaderboard' component={LeaderboardPage}/>
              <NewQuestion path='/newquestion' component={NewQuestion}/>  */}
      </div>
      </Router>
    )}
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}


export default connect(mapStateToProps)(App);
