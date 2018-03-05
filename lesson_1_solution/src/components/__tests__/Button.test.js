import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {

  it('should render', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display a custom className', () => {
    const wrapper = shallow(<Button className="my-class" />);

    expect(wrapper.hasClass('my-class')).toBe(true);
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} />);

    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

});
