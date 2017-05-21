import React, {Component} from 'react';
import css from './css/css.css';
import Title from './Presentational/Title';
import Test from './Presentational/Test';
import Footer from './Presentational/Footer';

// const App = () =>

//   <div>
//     <Title />
//     <Test />
//     <Footer />
//   </div>;

class App extends Component {
  constructor (props) {
    super(props);
    // console.log('log:', props);
    // this.state = {
    //   ...props,
    // };
  }

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

export default App;
