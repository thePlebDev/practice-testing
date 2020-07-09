import React,{useState} from 'react';

import NavBar from '../NavBar';
import HomeRequest from '../HomeRequest';



const App = ()=>{
  const [values,setValues] = useState('this is where the stuff goes')

  return(
    <div>
    <NavBar  />
    <HomeRequest />
    </div>
  )
}

export default App;
