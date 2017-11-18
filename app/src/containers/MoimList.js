import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moim from '../components/Moim';
import { fetchMoim } from '../actions/index';

class MoimList extends Component {
  componentDidMount() {
    this.props.fetchMoim();
  }

  renderMoim = () => {
    return this.props.moimList.map((moim) => {
      return <li key={moim.id}><Moim moimData={moim}/></li>;
    });
  };

  render () {
    return (
      <div>
        <h2>모임 리스트</h2>
        <ul>
          {this.renderMoim()}
        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    moimList: state.lists.moimList
  };
}, { fetchMoim })(MoimList);
