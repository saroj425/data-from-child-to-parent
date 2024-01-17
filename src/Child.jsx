import React from 'react'

const Child = ({changeMessage}) => {
  return (
    <div>
        <button onClick={()=>changeMessage("Good Bye from Child")}>Change Text !</button>
    </div>
  )
}

export default Child