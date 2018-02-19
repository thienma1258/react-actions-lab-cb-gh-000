'use strict';

import React from 'react';
import sinon from 'sinon';
import Row from '../components/Row';
import Cell from '../components/Cell';
import { shallow } from 'enzyme';

describe('<Row />', function () {
  it('should render <tr />', function () {
    expect(shallow(<Row row={[]} />).type()).toBe('tr');
  });

  it('should have row class', function () {
    expect(shallow(<Row row={[]} />).hasClass('row')).toBe(true);
  });

  it('should render <Cell /> for each item in row prop', function () {
    const row = ['0-0', '0-1', '0-2'];
    const wrapper = shallow(
      <Row
        row={row}
        onChange={sinon.stub()}
        onFocus={sinon.stub()}
      />
    );
    expect(wrapper.children().length).toBe(row.length);
  });

  it('should bind onChange handler to each <Cell />', function () {
    const row = ['0-0', '0-1', '0-2'];
    const onChange = sinon.spy();
    sinon.spy(onChange, 'bind');
    const wrapper = shallow(
      <Row
        row={row}
        onChange={onChange}
        onFocus={sinon.stub()}
      />
    );

    wrapper.children().forEach((cell, columnIndex) => {
      expect(cell.prop('onChange')).toBe(onChange.bind.returnValues[columnIndex]);
      expect(onChange.bind.getCall(columnIndex).args).toEqual([null, columnIndex]);
    });
  });

  it('should bind onFocus handler to each <Cell />', function () {
    const row = ['0-0', '0-1', '0-2'];
    const onFocus = sinon.spy();
    sinon.spy(onFocus, 'bind');
    const wrapper = shallow(
      <Row
        row={row}
        onChange={sinon.stub()}
        onFocus={onFocus}
      />
    );

    wrapper.children().forEach((cell, columnIndex) => {
      expect(cell.prop('onFocus')).toBe(onFocus.bind.returnValues[columnIndex]);
      expect(onFocus.bind.getCall(columnIndex).args).toEqual([null, columnIndex]);
    });
  });

  it('should pass cell prop to each <Cell />', function () {
    const row = ['0-0', '0-1', '0-2'];
    const wrapper = shallow(
      <Row
        row={row}
        onChange={sinon.stub()}
        onFocus={sinon.spy()}
      />
    );

    wrapper.children().forEach((cell, columnIndex) => {
      expect(cell.prop('cell')).toBe(row[columnIndex]);
    });
  });

  it('should use column index as key prop for each <Cell />', function () {
    const row = ['', '', ''];
    const wrapper = shallow(
      <Row
        row={row}
        onChange={sinon.stub()}
        onFocus={sinon.spy()}
      />
    );

    wrapper.children().forEach((cell, columnIndex) => {
      expect(cell.key()).toBe(String(columnIndex));
    });
  });
});
