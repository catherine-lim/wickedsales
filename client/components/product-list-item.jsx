import React from 'react';

class Productlistitem extends React.Component {

  render() {
    return (
      <div className="productListItem">
        <img className="firstimg" src="https://bit.ly/2JtVNE6" />
        <p><strong>Shake Weight</strong><br></br>
         Price: $29.99<br></br>
         Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.</p>
      </div>

    );
  }
}
export default Productlistitem;
