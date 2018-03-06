import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import DonutBox, { NUM_DONUTS } from '../DonutBox';
import Donut from '../Donut';

describe('DonutBox', () => {

  it('should render', () => {
    const component = renderer.create(<DonutBox />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have twelve donuts', () => {
    const wrapper = mount(<DonutBox />);

    expect(wrapper.find(Donut)).toHaveLength(NUM_DONUTS);
  });

});
