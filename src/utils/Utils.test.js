import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { formatCurrency, formatLocalCurrency, formatCurrencyTest } from './Utils'

describe('formatCurrency', () => {

  it('should be a number with two digits after decimal points and thousand seperator', () => {
    expect(formatCurrency()).toBe('')
    expect(formatCurrency('')).toBe('')
    expect(formatCurrency('x')).toBe('')
    expect(formatCurrency(undefined)).toBe('')
    expect(formatCurrency(10.10)).toBe('10.10')
    expect(formatCurrency(10.111)).toBe('10.11')
    expect(formatCurrency(10)).toBe('10.00')
    expect(formatCurrency(-10)).toBe('-10.00')
    expect(formatCurrency('10')).toBe('10.00')
    expect(formatCurrency('1000')).toBe('1,000.00')
    expect(formatCurrency(1000)).toBe('1,000.00')
    expect(formatCurrency(1000000000000000000)).toBe('1,000,000,000,000,000,000.00')
  });

})

describe('formatCurrencyTest', () => {

  it('should be a number with thousand seperator and digits after decimal points based on parameter', () => {
    expect(formatCurrencyTest()).toBe('')
    expect(formatCurrencyTest('')).toBe('')
    expect(formatCurrencyTest('x')).toBe('')
    expect(formatCurrencyTest(undefined)).toBe('')
    expect(formatCurrencyTest(10.10,2)).toBe('10.10')
    expect(formatCurrencyTest(10.111,2,2)).toBe('10.11')
    expect(formatCurrencyTest(10.111,0,0)).toBe('10')
    expect(formatCurrencyTest(10.78,0,0)).toBe('11') //rounded
    expect(formatCurrencyTest(10,2)).toBe('10.00')
    expect(formatCurrencyTest(-10,2)).toBe('-10.00')
    expect(formatCurrencyTest('10',2)).toBe('10.00')
    expect(formatCurrencyTest('1000',2)).toBe('1,000.00')
    expect(formatCurrencyTest(1000,2)).toBe('1,000.00')
    expect(formatCurrencyTest(1000000000000000000,2)).toBe('1,000,000,000,000,000,000.00')
  });

})

describe('formatLocalCurrency', () => {

  it('should be a number with thousand seperator', () => {
    expect(formatLocalCurrency(1000)).toBe('1,000')
  });

})
