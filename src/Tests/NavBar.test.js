import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import NavBar from '../components/NavBar';

it('renders correctly when there are no items',()=>{
  const nav = renderer.create(<NavBar />).toJSON();
  expect(nav).toMatchSnapshot();
})
