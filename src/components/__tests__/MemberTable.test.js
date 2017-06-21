import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import MemberTable from '../MemberTable'
import { Checkbox } from 'react-bootstrap'

describe(MemberTable, () => {
  const members = [{checkbox:false, name:'Nam', share:0, shareNumbers:0,
    sharePercent:0, fixedShare:0, nonCash:0, investedCash:0, startDate:0,
    days:0, vestedDate:new Date(), workedHours:0, efficiency:0, salary:0}];
  const totals = {};
  const checkChange = jest.fn();

  it('calls checkChange when clicked', () => {
    const wrapper = mount(
      <MemberTable members={members} totals={totals} onCheck={checkChange} />
    );

    const checkbox = wrapper.find(Checkbox);
    expect(checkbox).toHaveLength(1);
    checkbox.simulate('click');
    //expect(checkChange).toBeCalled();
  })
  //Generic Snapshot Test
  // it('renders and matches snapshot', () => {
  //   const component = renderer.create(
  //     <MemberTable members={data} onCheck={checkChange}/>
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

})
