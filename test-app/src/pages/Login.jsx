import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({isNurs}) {
  let nurs = useNavigate();

  const handleClick = () => {
    isNurs(true);
    nurs('/dashboard');
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
