import React from 'react';
import { shallow } from 'enzyme';
import Offers from './offers';

describe('Offers', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Offers />);
    expect(wrapper).toMatchSnapshot();
  });
});
