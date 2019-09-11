import React from 'react';
import { shallow } from 'enzyme';

import Tag from './Tag';

describe('Tag component', () => {
  let wrapper = null;
  const tag = { id: 1, label: 'label 1' };

  beforeEach(() => {
    wrapper = shallow(<Tag tag={tag} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct label', () => {
    const tagSpan = wrapper.find('span').first();
    console.log(tagSpan);
    expect(tagSpan.text()).toEqual(tag.label);
  });
});
