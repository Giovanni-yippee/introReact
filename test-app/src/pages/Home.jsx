import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const silteu = useNavigate()
  const handleClick = ()=>{
    let a = 7
    if(a == 0){
      alert('A 0-ge ten')
      silteu('/about-us')
    }
  }
  return (
    <div>
      <Navbar/>
      Welcome to Home Page!
      <div>
        <Link to={'/about-us'}>go to about-us</Link>
        <button onClick={handleClick}>Meni bas ta AboutUs-qa ot</button>
      </div>
    </div>
  )
}