import { describe } from 'mocha';
import { expect } from 'chai';
import { calculateSum } from './string-calculator';

describe('String Calculator', () => {
  it('should return zero for empty string', () => {
    const sum = calculateSum('');
    expect(sum).to.eql(0);
  });

  it('should return 4 for string \'4\'', () => {
    const sum = calculateSum('4');
    expect(sum).to.eql(4);
  });

  it('should return 13 for string \'13\'', () => {
    const sum = calculateSum('13');
    expect(sum).to.eql(13);
  });

  it('should return sum of two numbers', () => {
    const sum = calculateSum('4,3');
    expect(sum).to.eql(7);
  });
});
