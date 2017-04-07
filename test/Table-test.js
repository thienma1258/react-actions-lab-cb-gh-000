'use strict';

import React from 'react';
import sinon from 'sinon';
import Table from '../components/Table';
import Row from '../components/Row';
import { shallow } from 'enzyme';

describe('<Table />', function () {
  const table = [['0-0'], ['1-0'], ['2-0']];

  it('should render <table />', function () {
    expect(shallow(<Table table={[]} />).type()).toBe('table');
  });

  it('should have table class', function () {
    expect(shallow(<Table table={[]} />).hasClass('table')).toBe(true);
  });

  it('should render <tbody /> in <table />', function () {
    const wrapper = shallow(<Table table={[]} />);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.children().first().type()).toBe('tbody');
  });

  it('should bind onBlur handler to table', function () {
    const onBlur = sinon.stub();
    const wrapper = shallow(<Table table={[]} onBlur={onBlur} />);
    expect(wrapper.find('table').prop('onBlur')).toBe(onBlur);
  });

  it('should render <Row /> for each item in table prop', function () {
    const wrapper = shallow(
      <Table
        table={table}
        onChange={sinon.stub()}
        onFocus={sinon.stub()}
      />
    );
    expect(wrapper.children().first().children().length).toBe(table.length);
    wrapper.children().first().children().forEach((row) => {
      expect(row.type()).toBe(Row);
    });
  });

  it('should pass each row as prop to <Row />', function () {
    const wrapper = shallow(
      <Table
        table={table}
        onChange={sinon.stub()}
        onFocus={sinon.stub()}
      />
    );
    expect(wrapper.children().first().children().length).toBe(table.length);
    wrapper.children().first().children().forEach((row, rowIndex) => {
      expect(row.prop('row')).toBe(table[rowIndex]);
    });
  });

  it('should bind onChange handler to each <Row />', function () {
    const onChange = sinon.stub();
    sinon.stub(onChange, 'bind');
    const wrapper = shallow(
      <Table
        table={table}
        onChange={onChange}
        onFocus={sinon.stub()}
      />
    );
    wrapper.children().first().children().forEach((row, rowIndex) => {
      expect(row.prop('onChange')).toBe(onChange.bind.returnValues[rowIndex]);
      expect(onChange.bind.getCall(rowIndex).args).toEqual([null, rowIndex]);
    });
  });

  it('should bind onFocus handler to each <Row />', function () {
    const onFocus = sinon.stub();
    sinon.stub(onFocus, 'bind');
    const wrapper = shallow(
      <Table
        table={table}
        onChange={sinon.stub()}
        onFocus={onFocus}
      />
    );
    wrapper.children().first().children().forEach((row, rowIndex) => {
      expect(row.prop('onFocus')).toBe(onFocus.bind.returnValues[rowIndex]);
      expect(onFocus.bind.getCall(rowIndex).args).toEqual([null, rowIndex]);
    });
  });

  it('should use row index as key for each <Row />', function () {
    const wrapper = shallow(
      <Table
        table={table}
        onChange={sinon.stub()}
        onFocus={sinon.stub()}
      />
    );
    wrapper.children().first().children().forEach((row, rowIndex) => {
      expect(row.key()).toBe(String(rowIndex));
    });
  });
});
