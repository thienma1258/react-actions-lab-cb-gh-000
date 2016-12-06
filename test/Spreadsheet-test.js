'use strict';

const React = require('react');
const sinon = require('sinon');
const actions = require('../actions');
const Spreadsheet = require('../components/Spreadsheet');
const Table = require('../components/Table');
const { shallow } = require('enzyme');

describe('<Spreadsheet />', function () {
  const sandbox = sinon.sandbox.create();

  afterEach(function () {
    sandbox.restore();
  });

  it('should bind addColumn action', function () {
    sandbox.spy(actions.addColumn, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.addColumn.bind);
    expect(wrapper.instance().handleAddColumn).toBe(actions.addColumn.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.addColumn.bind, wrapper.instance());
  });

  it('should bind addRow action', function () {
    sandbox.spy(actions.addRow, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.addRow.bind);
    expect(wrapper.instance().handleAddRow).toBe(actions.addRow.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.addRow.bind, wrapper.instance());
  });

  it('should bind removeColumn action', function () {
    sandbox.spy(actions.removeColumn, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.removeColumn.bind);
    expect(wrapper.instance().handleRemoveColumn).toBe(actions.removeColumn.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.removeColumn.bind, wrapper.instance());
  });

  it('should bind removeRow action', function () {
    sandbox.spy(actions.removeRow, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.removeRow.bind);
    expect(wrapper.instance().handleRemoveRow).toBe(actions.removeRow.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.removeRow.bind, wrapper.instance());
  });

  it('should bind changeCell action', function () {
    sandbox.spy(actions.changeCell, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.changeCell.bind);
    expect(wrapper.instance().handleChange).toBe(actions.changeCell.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.changeCell.bind, wrapper.instance());
  });

  it('should bind focusCell action', function () {
    sandbox.spy(actions.focusCell, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.focusCell.bind);
    expect(wrapper.instance().handleFocus).toBe(actions.focusCell.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.focusCell.bind, wrapper.instance());
  });

  it('should bind blurCell action', function () {
    sandbox.spy(actions.blurCell, 'bind');
    const wrapper = shallow(<Spreadsheet />);
    sinon.assert.calledOnce(actions.blurCell.bind);
    expect(wrapper.instance().handleBlur).toBe(actions.blurCell.bind.returnValues[0]);
    sinon.assert.calledWithExactly(actions.blurCell.bind, wrapper.instance());
  });

  it('should have focused state for selected cell', function () {
    const wrapper = shallow(<Spreadsheet />);
    expect(wrapper.state().focused).toBe(null);
  });

  it('should default to table with one row', function () {
    const wrapper = shallow(<Spreadsheet />);
    const rowCount = wrapper.state().table.length;
    expect(rowCount).toBe(1);
  });

  it('should default to table with one column', function () {
    const wrapper = shallow(<Spreadsheet />);
    const columnCount = wrapper.state().table[0].length;
    expect(columnCount).toBe(1);
  });

  it('should have a single empty cell by default', function () {
    const wrapper = shallow(<Spreadsheet />);
    const cellValue = wrapper.state().table[0][0];
    expect(cellValue).toBe('');
  });

  it('should add handleAddColumn handler to "Add Column" button', function () {
    sandbox.stub(actions, 'addColumn');
    const wrapper = shallow(<Spreadsheet />);
    wrapper.findWhere((node) => node.text() === 'Add Column').first().simulate('click');
    sinon.assert.calledOnce(actions.addColumn);
  });

  it('should add handleAddRow handler to "Add Row" button', function () {
    sandbox.stub(actions, 'addRow');
    const wrapper = shallow(<Spreadsheet />);
    wrapper.findWhere((node) => node.text() === 'Add Row').first().simulate('click');
    sinon.assert.calledOnce(actions.addRow);
  });

  it('should add handleRemoveColumn handler to "Remove Column" button', function () {
    sandbox.stub(actions, 'removeColumn');
    const wrapper = shallow(<Spreadsheet />);
    wrapper.findWhere((node) => node.text() === 'Remove Column').first().simulate('click');
    sinon.assert.calledOnce(actions.removeColumn);
  });

  it('should add handleRemoveRow handler to "Remove Row" button', function () {
    sandbox.stub(actions, 'removeRow');
    const wrapper = shallow(<Spreadsheet />);
    wrapper.findWhere((node) => node.text() === 'Remove Row').first().simulate('click');
    sinon.assert.calledOnce(actions.removeRow);
  });

  it('should display focused cell in format rowIndex — columnIndex if cell is focused', function () {
    const wrapper = shallow(<Spreadsheet />);
    wrapper.setState({ focused: [1, 2] });
    expect(wrapper.find('.spreadsheet__focused').text()).toBe('1 - 2');
  });

  it('should not display focused cell if no cell is focused', function () {
    const wrapper = shallow(<Spreadsheet />);
    wrapper.setState({ focused: null });
    expect(wrapper.find('.spreadsheet__focused').text()).toBe('');
  });

  it('should pass table state to <Table />', function () {
    const wrapper = shallow(<Spreadsheet />);
    expect(wrapper.find(Table).prop('table')).toBe(wrapper.state('table'));
  });

  it('should pass bound handleChange handler as onChange to <Table />', function () {
    const wrapper = shallow(<Spreadsheet />);
    expect(wrapper.find(Table).prop('onChange')).toBe(wrapper.instance().handleChange);
  });

  it('should pass bound handleFocus handler as onFocus to <Table />', function () {
    const wrapper = shallow(<Spreadsheet />);
    expect(wrapper.find(Table).prop('onFocus')).toBe(wrapper.instance().handleFocus);
  });

  it('should pass bound handleBlur handler as onBlur to <Table />', function () {
    const wrapper = shallow(<Spreadsheet />);
    expect(wrapper.find(Table).prop('onBlur')).toBe(wrapper.instance().handleBlur);
  });
});
