import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Totals from './Totals'

describe(Totals, () => {
  const data = {totalShare:0, totalSharePercent:0, totalFixedShare:0,
    totalNonCash:0, totalInvestedCash:0, totalDays:0, totalWorkedHours:0, totalSalary:0};
  const label = 'Totals';
  const component = shallow(
    <Totals totals={data} />
  );

  //Generic Snapshot Test
  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <Totals totals={data} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //Content Test
  it('contains totals label', () => {
    expect(component.text()).toContain(label)
  });
})
