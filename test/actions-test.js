'use strict';

const sinon = require('sinon');
const actions = require('../actions');

describe('actions', function () {
  describe('#addColumn', function () {
    it('should be a function', function () {
      expect(typeof actions.addColumn, 'function');
    });

    it('should preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const table = [['']];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.addColumn.call(component, ev);
      sinon.assert.calledOnce(preventDefault);
    });

    it('should add a column to each row', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1'],
        ['1-0', '1-1'],
        ['2-0', '2-1']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.addColumn.call(component, ev);
      sinon.assert.calledWith(setState, {
        table: [
          ['0-0', '0-1', ''],
          ['1-0', '1-1', ''],
          ['2-0', '2-1', '']
        ] 
      });
    });
  });

  describe('#addRow', function () {
    it('should be a function', function () {
      expect(typeof actions.addRow, 'function');
    });

    it('should preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const table = [['']];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.addRow.call(component, ev);
      sinon.assert.calledOnce(preventDefault);
    });

    it('should add a row to the table', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1'],
        ['1-0', '1-1'],
        ['2-0', '2-1']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.addRow.call(component, ev);
      sinon.assert.calledWith(setState, {
        table: [
          ['0-0', '0-1'],
          ['1-0', '1-1'],
          ['2-0', '2-1'],
          ['', '']
        ]
      });
    });
  });

  describe('#changeCell', function () {
    it('should be a function', function () {
      expect(typeof actions.changeCell, 'function');
    });

    it('should not preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const table = [['']];
      const component = { setState, state: { table } };
      const ev = { preventDefault, target: { value: '' } };
      actions.changeCell.call(component, 0, 0, ev);
      sinon.assert.notCalled(preventDefault);
    });

    it('should change cell value', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1'],
        ['1-0', '1-1'],
        ['2-0', '2-1']
      ];
      const component = { setState, state: { table } };
      const ev = {
        preventDefault,
        target: {
          value: 'updated cell'
        }
      };
      const rowIndex = 2;
      const columnIndex = 1;
      actions.changeCell.call(component, rowIndex, columnIndex, ev);
      sinon.assert.calledWith(setState, {
        table: [
          ['0-0', '0-1'],
          ['1-0', '1-1'],
          ['2-0', 'updated cell']
        ] 
      });
    });
  });

  describe('#focusCell', function () {
    it('should be a function', function () {
      expect(typeof actions.focusCell, 'function');
    });

    it('should not preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const component = { setState, state: {} };
      const ev = { preventDefault };
      actions.focusCell.call(component, 0, 0, ev);
      sinon.assert.notCalled(preventDefault);
    });

    it('should update focused state', function () {
      const setState = sinon.spy();

      const focused = null;
      const component = { setState, state: { focused } };
      const rowIndex = 2;
      const columnIndex = 1;
      actions.focusCell.call(component, rowIndex, columnIndex);
      sinon.assert.calledWith(setState, {
        focused: [rowIndex, columnIndex]
      });
    });
  });

  describe('#blurCell', function () {
    it('should be a function', function () {
      expect(typeof actions.blurCell, 'function');
    });

    it('should not preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const component = { setState, state: {} };
      const ev = { preventDefault };
      actions.blurCell.call(component, ev);
      sinon.assert.notCalled(preventDefault);
    });

    it('should reset focused state', function () {
      const setState = sinon.spy();

      const focused = [1, 3];
      const component = { setState, state: { focused } };
      actions.blurCell.call(component);
      sinon.assert.calledWith(setState, {
        focused: null
      });
    });
  });

  describe('#removeRow', function () {
    it('should be a function', function () {
      expect(typeof actions.removeRow, 'function');
    });

    it('should preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const table = [[''], ['']];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeRow.call(component, ev);
      sinon.assert.calledOnce(preventDefault);
    });

    it('should remove row from table', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1'],
        ['1-0', '1-1'],
        ['2-0', '2-1']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeRow.call(component, ev);
      sinon.assert.calledWith(setState, {
        table: [
          ['0-0', '0-1'],
          ['1-0', '1-1']
        ]
      });
    });

    it('should not remove last row', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeRow.call(component, ev);
      sinon.assert.notCalled(setState);
    });
  });

  describe('#removeColumn', function () {
    it('should be a function', function () {
      expect(typeof actions.removeColumn, 'function');
    });

    it('should preventDefault', function () {
      const setState = sinon.stub();
      const preventDefault = sinon.spy();

      const table = [[''], ['']];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeColumn.call(component, ev);
      sinon.assert.calledOnce(preventDefault);
    });

    it('should remove row from table', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0', '0-1'],
        ['1-0', '1-1'],
        ['2-0', '2-1']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeColumn.call(component, ev);
      sinon.assert.calledWith(setState, {
        table: [
          ['0-0'],
          ['1-0'],
          ['2-0']
        ]
      });
    });

    it('should not remove last column', function () {
      const setState = sinon.spy();
      const preventDefault = sinon.stub();

      const table = [
        ['0-0'],
        ['1-0'],
        ['2-0']
      ];
      const component = { setState, state: { table } };
      const ev = { preventDefault };
      actions.removeColumn.call(component, ev);
      sinon.assert.notCalled(setState);
    });
  });
});
