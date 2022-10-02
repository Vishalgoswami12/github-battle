import React from 'react';

import Popular from './Popular';
import Battle from './Battle';
import Header from './Header';
import { Route } from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />

        <Route path="/" exact>
          <Popular />
        </Route>
        <Route path="/battle">
          <Battle />
        </Route>
      </>
    );
  }
}

export default Main;