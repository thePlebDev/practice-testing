import React from 'react';
import {shallow,mount} from 'enzyme';
import renderer from 'react-test-renderer';

import NavBar from '../components/NavBar';

// the snapshot works
it('renders correctly when there are no items',()=>{
  const nav = renderer.create(<NavBar />).toJSON();
  expect(nav).toMatchSnapshot();
})

checks to make sure that the props are in
it('renders with the inpur correctly with the null value',()=>{
  const props ={
    value:null
  },
  wrapper = mount(<NavBar {...props} />);
  expect(wrapper.prop('value')).toEqual(null)

})

describe('the navBar opening and closing event',()=>{
  // this tested the state and the className change
  it('clicks and changes the className on the element.',()=>{
    const wrapper = shallow(<NavBar />)
    // we know that this works
    expect(wrapper.find('.div-button-close').length).toEqual(1)
    wrapper.find('.div-button-close').simulate('click');
    expect(wrapper.find('.div-button-open').length).toEqual(1)

  })
})

// so right now I want to test some useEffect stuff.
