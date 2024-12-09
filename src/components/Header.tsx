
import "../styles/header.css"
import Image from "next/image"
import React from "react"
import { IoSearchOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

export default function Header(){
return(
  <main>
    <div className="navbar">
      <Image  src={"/images/Frame2.png"}
       alt="Logo" 
       width={78}
       height={78}
      className="nike"/>
      <nav className="nav-links">
        <a href="#">New & Featured</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sale</a>
        <a href="#">SNKRS</a>
      </nav>
      <div className="search-container">
       <IoSearchOutline  className="w-[24] h-[24] top-3" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="icons">
      <FaRegHeart className="icon" />
      <AiOutlineShopping className="icon" />
      </div>
    </div>
  </main>
   









)
}
