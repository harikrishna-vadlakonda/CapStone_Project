import React from 'react';
import { shallow } from 'enzyme';
import Features from './features';

describe('Features', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Features />);
    expect(wrapper).toMatchSnapshot();
  });
});
