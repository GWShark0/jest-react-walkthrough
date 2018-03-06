import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import DonutBox, { NUM_DONUTS } from '../DonutBox';
import Donut from '../Donut';

jest.mock('../Donut', () => 'span');

describe('DonutBox', () => {

  it('should render (mocked)', () => {
    const component = renderer.create(<DonutBox />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

});
