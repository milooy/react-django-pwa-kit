import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import Home from './Home'
import MoimList from '../containers/MoimList'
import '../static/styles/App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MOGAE, 모임 개설</h1>
        </div>
        <div className="content-wrapper">
          <ul>
            <li><NavLink exact to="/">홈으로</NavLink></li>
            <li><NavLink to="/moim/">모임 리스트</NavLink></li>
          </ul>
        <Switch>
          <Route exact path="/moim/" component={MoimList}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
