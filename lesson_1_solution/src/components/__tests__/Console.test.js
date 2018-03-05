import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Console from '../Console';
import Button from '../Button';

describe('Console', () => {

  it('should render', () => {
    const component = renderer.create(<Console />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('switchCode()', () => {
    it('should switch on a new code', () => {
      const wrapper = shallow(<Console />);

      wrapper.instance().switchCode('test');

      expect(wrapper.state().code).toBe('test');
    });

    it('should toggle off an already present code', () => {
      const wrapper = shallow(<Console />);
      wrapper.setState({ code: 'test' });

      wrapper.instance().switchCode('test');

      expect(wrapper.state().code).toBe('');
    });

    it('should be called (a)', () => {
      const fn = jest.fn();
      const wrapper = mount(<Console />);
      const buttons = wrapper.find('.button');
      wrapper.instance().switchCode = fn;

      buttons.forEach(button => button.simulate('click'));

      expect(fn).toHaveBeenCalledTimes(3);
    });

    it('should be called (b)', () => {
      const fn = jest.fn();
      const wrapper = mount(<Console />);
      const actor = wrapper.find(Button).first();
      wrapper.instance().switchCode = fn;

      actor.simulate('click')

      expect(fn).toHaveBeenCalled();
    });
  });

  it('should display a code class', () => {
    const wrapper = shallow(<Console />);
    wrapper.setState({ code: 'test' });

    expect(wrapper.hasClass('console--test')).toBe(true);
  });

});
