import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ClientValidator/App.js';
import runTests from './utils/runTests';
import { creative, click, tests, PORT, IP } from './constants';
// example test url = 'http://localhost:3000/hardCoded?url=http://obj.adman.gr/talos/2017/airamad/12236/index.html&click=http://www.protergia.gr/el/content/nyxterinh-xreosh-olo-to24oro';

// initializations
const initialState = {};

let url = '';

const getDataFromServer = async url_ => {
  const data = await runTests(url_);

  return data;
};

const init = async () => {
  // const data1 = await waitFor(async () => {
    // run all tests with click variable in port for creative
  const data2 = await tests.map(async test => {
    // build tests url
    url = `http://${IP}:${PORT}/${test}?url=${creative}&click=${click}`;

    const data = await getDataFromServer(url);

    console.log('data received:', data);
    return data;
  });

  console.log('data2:', data2);

  Promise.all(data2).then(res => {
    const res_ = res.map(item => {
      console.log('log:', item.output[0]);
      return item.output[0];
    });
    console.log('res_:', res_);

    for (let i = 0; i < res_.length; i++) {
      initialState[res_[i].nameOfTest] = res_[i];
    }

    // console.log('initialState', initialState);
    // initialState = res.output;
    ReactDOM.render(
      <Provider store={configureStore(initialState)}>
        <App />
      </Provider>,
      document.getElementById('app')
    );
  }).catch(reason => {
    console.log(reason);
  });
  return data2;
};

init();
