import React from 'react';
import Instruction from './Instruction';
import Player from './Player';

class Battle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Instruction/>
        <Player/>
      </>
    );
  }
}

export default Battle;