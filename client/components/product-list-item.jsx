import React from 'react';

function Productlistitem(props) {
  return (
    <React.Fragment>
      <div className="card">
        <img src= {props.image} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">${props.price}</p>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Productlistitem;
