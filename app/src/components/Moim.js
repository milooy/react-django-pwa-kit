import React from 'react';


export default ({ moim }) => {
  return (
    <div className="moim-container">
      <img className="moim-thumbnail" src={moim.thumbnail}/>
      <div className="moim-contents">
        <p className="title">{moim.title}</p>
        <div className="moim-footer">
          <div className="like-container">
            <i className="material-icons">&#xE87D;</i>
            <div className="count">{moim.like}</div>
          </div>
          <p className="date">{moim.moimDate}</p>
        </div>
      </div>
    </div>
  );
}
