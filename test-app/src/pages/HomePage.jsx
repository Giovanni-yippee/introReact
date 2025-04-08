import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const silteu = useNavigate()
    const handleClick = ()=>{
        silteu('/log-out')
    }
  return (
    <div>
      <h1>Басты бетке қош келдіңіз!</h1>
      <button onClick={handleClick}>Log out</button>
    </div>
  )
}
