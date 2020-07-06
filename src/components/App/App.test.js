import React from 'react';


import { shallow } from 'enzyme';

import App from './index.js';
import BeerList from '../BeerList'
import InputArea from '../InputArea'


describe('BeerListContainer',()=>{
  it('should render InputArea and BeerList',() =>{
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <App/>
    ])).to.equal(true)
  })
})
