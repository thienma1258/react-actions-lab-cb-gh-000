'use strict';

import React from 'react';

export default class Cell extends React.Component {

  render () {
    const {cell,onChange,onFocus}=this.props;
    return (<td className='cell'><input type='text' value={cell} onChange={onChange} onFocus={onFocus} /></td>)
  }
}
