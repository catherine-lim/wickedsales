import React from 'react';

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <div className="row align-self-center">
        <div className="col col-sm">
      1 of 3
        </div>
        <div className="col col-sm">
      2 of 3
        </div>
        <div className="col col-sm">
      3 of 3
        </div>
      </div>

    );

  }
}
export default Productlist;
