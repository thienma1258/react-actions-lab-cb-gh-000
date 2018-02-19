import Spreadsheet from './components/Spreadsheet';
import React from 'react';
import ReactDOM from 'react-dom';

require('./test/index-test.js'); // Leave this in!

const $main = document.getElementById('main');
ReactDOM.render(<Spreadsheet />, $main);
