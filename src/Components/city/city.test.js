import React from 'react';
import { shallow } from 'enzyme';
import City from './city';

describe('City', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<City />);
    expect(wrapper).toMatchSnapshot();
  });
});
