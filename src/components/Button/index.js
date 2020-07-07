import React,{useState} from 'react';


const Button = ()=>{
  const [num,setNum] = useState(0)

  const handleClick =()=>{
    setNum(num + 2)
  }

  return(
    <div>
      <button type='button' className='button' onClick={()=>handleClick()}>Click me</button>
      <div className='numbers'>{num}</div>
    </div>
  )
}

export default Button;
