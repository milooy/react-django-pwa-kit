import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import MoimList from '../containers/MoimList'
import Home from '../containers/Home'
import '../static/styles/App.less';

class App extends Component {
  render() {
    return (
      <section>
        <nav className="transparent" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">moimer</a>
            <ul className="right hide-on-med-and-down">
              <li><NavLink exact to="/">홈</NavLink></li>
              <li><NavLink exact to="/moim/">리스트</NavLink></li>
            </ul>
            <ul id="nav-mobile" className="side-nav">
              <li><NavLink exact to="/">홈</NavLink></li>
              <li><NavLink exact to="/moim/">리스트</NavLink></li>
            </ul>
            <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>

          </div>
        </nav>

        <Switch>
          <Route exact path="/moim/" component={MoimList}/>
          <Route exact path="/" component={Home}/>
        </Switch>

        <footer className="page-footer transparent">
            <div className="container">
              <p>TEAMBURN © 2017 <a href="#">Github</a></p>
            </div>
        </footer>
      </section>
    );
  }
}

export default App;
