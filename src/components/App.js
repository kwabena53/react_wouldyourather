import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { handleInitialData } from '../actions/shared'
import Home from './Home'


class App extends Component{
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">
          <Home/>
      </div>
    );
  }
}



export default connect()(App);
