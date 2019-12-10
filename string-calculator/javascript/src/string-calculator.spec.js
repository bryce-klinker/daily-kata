import { describe } from 'mocha';
import { expect } from 'chai';
import { calculateSum } from './string-calculator';

describe('String Calculator', () => {
  it('should return zero for empty string', () => {
    assertCalculateSum('', 0);
  });

  it('should return 4 for string \'4\'', () => {
    assertCalculateSum('4', 4);
  });

  it('should return 13 for string \'13\'', () => {
    assertCalculateSum('13', 13);
  });

  it('should return 7 for string \'4,3\'', () => {
    assertCalculateSum('4,3', 7);
  });

  it('should return 13 for string \'6,7\'', () => {
    assertCalculateSum('6,7', 13);
  });

  it('should return 12 for string \'1,2,4,2,3\'', () => {
    assertCalculateSum('1,2,4,2,3', 12);
  });

  it('should calculate sum using new line delimiter', () => {
    assertCalculateSum('4,5\n6\n8', 23);
  });

  it('should calculate sum using custom single character delimiter', () => {
    assertCalculateSum('//[;]\n6;5;2;8', 21);
  });

  function assertCalculateSum(input, expected) {
    const sum = calculateSum(input);
    expect(sum).to.eql(expected);
  }
});
