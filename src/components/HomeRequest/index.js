import React,{useState,useEffect} from 'react';
import axios from 'axios';

import Names from '../Names';

import ticketMaster from '../Services/ticketMaster.js'


const HomeRequest = ()=>{
  const [isLoading,setIsLoading] = useState(true)
  const [info,setInfo] = useState('')

  useEffect(()=>{
    console.log('got')
    ticketMaster()
    .then(doc=>{
      console.log(doc)
      setInfo(doc)
    })
    .then(()=>{setIsLoading(false)})
    .catch(err=>{console.log(err)})

  },[])

  return(
    <div className="container-class">
      {
        isLoading
        ?
        <h1>Loading</h1>
        :
        info.map((item)=>{
          return <Names names={item} key={item.id} />
        })
      }
    </div>
  )
}

export default HomeRequest
