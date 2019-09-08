import { Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import routerConfig from './routerConfig'
class RouterComponent extends Component {
  render() { 
    return (
      <Switch>
        {
          routerConfig.map((item, index) => {
            const { path, component, exact } = item;
            return (
              <Route
                path={path}
                key={index}
                component={component}
                exact={exact}
              />
            )
          })
        }
      </Switch>
    );
  }
}
 
export default RouterComponent;