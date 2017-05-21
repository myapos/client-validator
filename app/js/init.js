import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/ClientValidator/App.js';
import runTests from './utils/runTests';
import { creative, click, tests, PORT, IP } from './constants';
// export const url = 'http://localhost:3000/hardCoded?url=http://obj.adman.gr/talos/2017/airamad/12236/index.html&click=http://www.protergia.gr/el/content/nyxterinh-xreosh-olo-to24oro';

const res = new Map();
let url = '';

const getDataFromServer = async url_ => {
  const data = await runTests(url_);
  // console.log('data received:', data);
  return data;
};

// run all tests with click variable in port for creative

tests.map(async test => {
  // build tests url
  url = `http://${IP}:${PORT}/${test}?url=${creative}&click=${click}`;

  // console.log('test:', test, ' index:', index, url);

  const data = await getDataFromServer(url);

  // console.log(`running test: ${test}`);
  // console.log('data received:', data);

  await res.set(test, data);
  return true;
});

console.log('res:', res);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
