import { expect } from 'chai';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  increment,
  decrement,
} from '../../../src/modules/counter/counter';
import counterReducer from '../../../src/modules/counter/counter';

describe('(Redux Module) Counter', () => {
  describe('(Reducer)', () => {
    it('Should be a function', () => {
      expect(counterReducer).to.be.a('function');
    });

    it('Should initialize with a state of 0 (Number)', () => {
      expect(counterReducer(undefined, {})).to.equal(0);
    });

    it('Should ignore unknown actions', () => {
      expect(counterReducer(2, { type: 'unknown' })).to.equal(2);
    });

    it('Should handle increment', () => {
      expect(counterReducer(2, increment())).to.equal(3);
    });

    it('Should handle decrement', () => {
      expect(counterReducer(5, decrement())).to.equal(4);
    });
  });
});
