import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { formatCurrency } from './Utils'

describe('formatCurrency', () => {

  it('should be two decimal number with thousand seperator', () => {
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
