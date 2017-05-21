import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/';
import css from './css/css.css';
import Title from './Presentational/Title';
import Test from './Presentational/Test';
import Footer from './Presentational/Footer';

class App extends Component {

  render () {
    return (
      <div>
        <Title />
        <Test />
        <Footer />
      </div>
    );
  }
}

export default connect(state => state, actions)(App);
