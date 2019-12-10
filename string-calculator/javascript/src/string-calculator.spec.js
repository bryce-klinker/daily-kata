import { describe } from 'mocha';
import { expect } from 'chai';
import { StringCalculor } from './string-calculator';

describe('String Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculor();
  });

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

  it('should raise an error when string has single negative number', () => {
    const input = '-5,2,2';
    expect(() => calculator.add(input)).to.throw('negatives not allowed: -5');
  });

  it('should raise an error when string has multiple negative numbers', () => {
    const input = '-5,-2,-2';
    expect(() => calculator.add(input)).to.throw('negatives not allowed: -5, -2, -2');
  });

  it('should track the number of times called', () => {
    calculator.add('1');
    calculator.add('1');
    calculator.add('1');
    calculator.add('1');

    expect(calculator.getCallCount()).to.eql(4);
  });

  it('should update number of times called', () => {
    calculator.add('5');
    calculator.add('5');
    calculator.add('5');

    expect(calculator.getCallCount()).to.eql(3);
  });

  it('should ignore numbers greater than 1000', () => {
    assertCalculateSum('1000,4,1001', 1004);
  });

  function assertCalculateSum(input, expected) {
    const sum = calculator.add(input);
    expect(sum).to.eql(expected);
  }
});
