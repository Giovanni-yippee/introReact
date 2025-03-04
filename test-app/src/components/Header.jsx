import React from "react"
import '../index.css'

export default function Header(element) {
  console.log(element);

  return (
    <header>
      <h2>{element.name}</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p>{element.hobby}</p>
    </header>
  )
}