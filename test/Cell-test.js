'use strict';

const React = require('react');
const sinon = require('sinon');
const Cell = require('../components/Cell');
const { shallow } = require('enzyme');

describe('<Cell />', function () {
  it('should render <td />', function () {
    expect(shallow(<Cell />).type()).toBe('td');
  });

  it('should have cell class', function () {
    expect(shallow(<Cell />).hasClass('cell')).toBe(true);
  });

  it('should render <input /> within <td></td>', function () {
    const wrapper = shallow(<Cell />);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.children().first().type()).toBe('input');
  });

  it('should set value of <input /> to cell prop', function () {
    const cell = 'some value';
    const wrapper = shallow(<Cell cell={cell} />);
    expect(wrapper.children().first().prop('value')).toBe(cell);
  });

  it('should bind onChange to <input />', function () {
    const onChange = sinon.stub();
    const wrapper = shallow(<Cell onChange={onChange}/>);
    expect(wrapper.children().first().prop('onChange')).toBe(onChange);
  });

  it('should bind onFocus to <input />', function () {
    const onFocus = sinon.stub();
    const wrapper = shallow(<Cell onFocus={onFocus}/>);
    expect(wrapper.children().first().prop('onFocus')).toBe(onFocus);
  });
});
