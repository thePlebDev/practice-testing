import React,{useState} from 'react';

import NavBar from '../NavBar';



const App = ()=>{
  const [values,setValues] = useState('this is where the stuff goes')

  return(
    <div>
    <NavBar  />
    </div>
  )
}

export default App;
