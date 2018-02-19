require('./test/index-test.js'); // Leave this in!

import Spreadsheet from './components/Spreadsheet';
import React from 'react';
import ReactDOM from 'react-dom';

const $main = document.getElementById('main');
ReactDOM.render(<Spreadsheet />, $main);