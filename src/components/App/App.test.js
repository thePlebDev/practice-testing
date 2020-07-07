import React from 'react';

import { shallow } from 'enzyme';

import App from './index.js';
import NavBar from '../NavBar'


describe('tests for the App component',()=>{
  it('should render',()=>{
    const wrapper = shallow(<App />)
    expect(wrapper).not.toBeNull()
  })

  it('should render with a NavBar component',()=>{
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <NavBar />
    ])).toEqual(true)
  })
})
