import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './Dropdown';

describe('Dropdown tags component', () => {
  let wrapper = null;
  const tags = [{ id: 1, label: 'label 1' }, { id: 2, label: 'label 2' }];

  beforeEach(() => {
    wrapper = shallow(<Dropdown tags={tags} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct number of options', () => {
    const select = wrapper.find('select').first();
    expect(select.props().children.length).toEqual(tags.length);
  });
});
