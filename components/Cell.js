'use strict';

const React = require('react');

class Cell extends React.Component {
  render () {
    return (
      <td className='cell'>
        <input
          value={this.props.cell}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
        />
      </td>
    );
  }
}

module.exports = Cell;
