import { describe } from 'mocha';
import { expect } from 'chai';
import { calculateSum } from './string-calculator';

describe('String Calculator', () => {
  it('should return zero for empty string', () => {
    const sum = calculateSum('');
    expect(sum).to.eql(0);
  });
});
