'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const {row,onChange,onFocus}=this.props;
    return (<tr className='row'>
    {
      row.map((item,i)=>{
        {console.log('test')}
    return    (<Cell cell={item} onChange={onChange} onFocus={onFocus} />)
    })
    };
    </tr>)
  }
}
