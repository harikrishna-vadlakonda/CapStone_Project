import React from 'react';
import { shallow } from 'enzyme';
import Statistics from './statistics';

describe('Statistics', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Statistics />);
    expect(wrapper).toMatchSnapshot();
  });
});
