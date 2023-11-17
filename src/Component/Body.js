import React,{usestaate}from 'react'

const Body = () => {
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>like</button>
      <p>likes;{count}</p>
    </div>
  )
}

export default Body
