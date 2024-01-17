import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [message,setMessage] = useState("Hello Saroj from Parent");

    const changeMessage = (msg)=>{
        setMessage(msg);
    }


  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div>
            <div>{message}</div>
            <Child changeMessage={changeMessage}/>
        </div>
    </div>
  )
}

export default Parent