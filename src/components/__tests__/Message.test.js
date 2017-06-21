import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import MessagePopover from '../Message'

describe('MessagePopover', () => {
  const text = 'test';
  const component = shallow(
    <MessagePopover placement='bottom' message='test'/>
  );

  //Generic Snapshot Test
  it('renders and matches snapshot', () => {
    const component = renderer.create(
      <MessagePopover id='t1' placement='bottom' message='test'/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //Content Test
  it('contains test text', () => {
    expect(component.text()).toContain(text)
  });
})
