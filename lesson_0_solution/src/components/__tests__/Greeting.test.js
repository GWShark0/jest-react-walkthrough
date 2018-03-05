import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Greeting from '../Greeting';

describe('Greeting', () => {

  it('should render', () => {
    const component = renderer.create(<Greeting />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display name (snapshot)', () => {
    const component = renderer.create(<Greeting name="World" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display name (enzyme)', () => {
    const wrapper = shallow(<Greeting name="World" />);

    expect(wrapper.text()).toContain('World');
  });

  it('should have a `greeting` className', () => {
    const wrapper = shallow(<Greeting />);

    expect(wrapper.hasClass('greeting')).toBe(true);
  });

  it('should be an <h1>', () => {
    const wrapper = shallow(<Greeting />);

    expect(wrapper.type()).toBe('h1');
  });

});
