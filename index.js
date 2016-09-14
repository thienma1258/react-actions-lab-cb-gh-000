require('./test/index-test.js'); // Leave this in!

const Spreadsheet = require('./components/Spreadsheet');
const React = require('react')
const ReactDOM = require('react-dom');

const $main = document.getElementById('main');
ReactDOM.render(<Spreadsheet />, $main);
