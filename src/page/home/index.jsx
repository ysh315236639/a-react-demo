import React, { Component } from 'react';
import { getToken } from '../../utils/cookie'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from '../../components/nav'
import Header from '../../components/header'
import Statistice from '../statistics/index'
import Pro from '../pro/index'
import './index.scss'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: getToken()
    }
  }
  componentDidMount() {
    if(!this.state.token) {
      this.props.history.push('/login')
    }
  }
  render() { 
    return (
      <Router>
        <div className="main-box">
          <div className="left-Nav">
            <Nav />
          </div>
          <div className="content">
            <Header />
            <Redirect to="/statistice" /> 
            <Route path="/statistice" exact component={Statistice} />
            <Route path="/pro" exact component={Pro} />
          </div>
        </div>
      </Router>
    );
  }
}
 
export default Home;