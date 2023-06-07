import React from 'react';

import Popular from './Popular';
import Battle from './Battle';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={ <Popular />}/>;
      <Route path="/battle" element={ <Battle />}/>
      </Routes>

      </Router>

       
       
      </>
    );
  }
}

export default Main;