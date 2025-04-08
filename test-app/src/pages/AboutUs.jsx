import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
  
export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      Welcome to Kazakhstan!
      <div>
        <Link to={'/'}>back to homepage</Link>
      </div>
    </div>
  )
}