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
import ResultPage from "./ResultPage"
import ErrorPage from "./ErrorPage"



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
            <Route path='/question/:id' component={QuestionPage}/>
            <Route path='/add' component={NewQuestion}/> 
            <Route path='/result/:id' component={ResultPage}/> 
            <Route path='/leaderboard' component={LeaderboardPage}/> 
            <Route path='/error' component={ErrorPage}/> 
            <Route path='/login' component={LoginPage}/> 
            </div>
            :
              <LoginPage/>
          }
        
        
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
