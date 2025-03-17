import React, { useEffect, useState } from 'react'

export default function EffectHook() {
  const [count, setCount] = useState(()=>{
    let savedSan = localStorage.getItem('san')
    return savedSan == null ? 0 : parseInt(savedSan)
  })

  useEffect(()=>{
    localStorage.setItem('san', count)
  },[count])

  return (
    <div style={{
      backgroundColor:'black',
      color:'white'
    }}>
      <div>{count}</div>
      <button onClick={()=>setCount(count + 1)}>Press</button>
    </div>
  )
}