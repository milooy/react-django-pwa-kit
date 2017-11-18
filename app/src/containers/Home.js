import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moim from '../components/Moim';
import { fetchMoim } from '../actions/index';

import PropTypes from 'prop-types';

class Home extends Component {

  static propTypes = {
    fetchMoim: React.PropTypes.func.isRequired,
    moimList: React.PropTypes.array.isRequired
  };

  componentDidMount () {
    this.props.fetchMoim();
  }


  renderMoim () {
    return this.props.moimList.map(moim => {
      return <div className="col s6 m4"><Moim key={moim.id} moim={moim}/></div>;
    });
  }

  render () {
    return (
      <div>
        <section>
          <div className="intro section no-pad-bot push-section-up" id="index-banner">
            <div className="container">
              <div className="search-container">
                <input id="moimSearch" className="browser-default" type="search" placeholder="원하는 주제로, 새로운 사람과."/>
                <div className="search-btn-container">
                  <i className="material-icons">&#xE8B6;</i>
                  <i className="material-icons">&#xE878;</i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="moim-list-section">
          <div className="container">
            <div className="row">
              { this.renderMoim() }
            </div>


          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moimList: state.lists.moimList
  };
};

export default connect(mapStateToProps, { fetchMoim })(Home);
