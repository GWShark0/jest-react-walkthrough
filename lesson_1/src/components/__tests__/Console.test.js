import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Console from '../Console';

describe('Console', () => {

  it('should render', () => {
    const component = renderer.create(<Console />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('switchCode()', () => {
    it('should switch on a new code', () => {

    });

    it('should toggle off an already present code', () => {

    });

    it('should be called', () => {

    });
  });

  it('should display a code class', () => {

  });

});
