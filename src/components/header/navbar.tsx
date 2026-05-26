"use client";

import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import style from '@/components/header/header.module.css';
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
    const [toggle, setToggle] = useState(true);
    
    function handleclick() {
        console.log('in handleclick')
        setToggle( (perv)=>{ console.log(perv); return !perv} )
       
    }

  return <div>
    <nav className={style.navbar}>
        <ul className={style.navlinks}>
          <Link className={style.logo} href={"/"}>
            CLOUD <GrTechnology /> HOSTING
          </Link>
          <div className={style.menu}>
            {toggle ? (<IoClose className={style.icon} onClick={() =>handleclick()} />) : <LuMenu className={style.icon} onClick={() =>handleclick()} />}
          </div>
          <div className={style.navlinkwraper} style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || '' }} >
            <Link onClick={()=>{handleclick()}} className={style.navlink} href={"/Home"}> Home </Link>
            <Link onClick={()=>{handleclick()}} className={style.navlink} href={"/about"}> about </Link>
            <Link onClick={()=>{handleclick()}} className={style.navlink} href={"/articles"}> articles </Link>
            <Link onClick={()=>{handleclick()}} className={style.navlink} href={"/adminDashbord"}> adminDashbord </Link>
          </div>
        </ul>
      </nav>
  </div>;
}
