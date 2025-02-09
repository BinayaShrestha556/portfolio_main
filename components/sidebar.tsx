"use client"
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaUpwork } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='fixed hidden lg:flex top-[60%]  flex-col gap-7 text-xl align-center left-[5%]'>
    <Link href="https://www.instagram.com/binay._.shrestha/"><FaInstagram/></Link>
    <Link href="https://github.com/BinayaShrestha556"><FaGithub/></Link>
    <Link href="https://www.facebook.com/Binaya.Shrestha.00"><FaFacebook/></Link>
    <Link href="https://www.linkedin.com/in/binaya-shrestha-1b906a326/"><FaLinkedin/></Link>
    <Link href=""><FaUpwork/></Link>
        
    </div>
  )
}

export default Sidebar