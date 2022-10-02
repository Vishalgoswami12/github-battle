import React from 'react';

function Avtar2(props) {
    return (
      <div className="flex ml-12">
        <img src={this.state.dataTwo.avatar_url} alt="img1"/>
        <p className="mx-5">{this.state.dataTwo.login}</p>
        <button onClick={this.handleCancel2} className="text-red-600">
          X
        </button>
      </div>
    );
  }
  
  export default Avtar2;