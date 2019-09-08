import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './page/home/index'
import Login from './page/login/login'
import 'antd/dist/antd.css'
class App extends Component {
  render() { 
    return (
      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} exact />
      </Router>
    );
  }
}
 
export default App;
