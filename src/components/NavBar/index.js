import React,{useState} from 'react';



const NavBar = ()=>{
  const [state,setState] =useState(false)

  const handleClick =()=>{
    setState(!state)
    console.log(state)
  }

  return(
    <div>
      <h1>The navBar</h1>
      <button className={state?"div-button-open":"div-button-close"} onClick={()=>handleClick()}>Click me</button>
    </div>
  )
}

export default NavBar
