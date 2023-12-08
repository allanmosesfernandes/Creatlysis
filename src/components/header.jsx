'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const activeLink = usePathname();
    console.log(activeLink);
  return (
    <header className='uppercase font-bold text-black flex items-center justify-between w-8/12 mx-auto h-[20vh]'>
        <Link href="about" className={activeLink.includes('about') ? "relative active" : "relative"}>About Us</Link>
        <Link href="/" className={activeLink.includes('earn') ? "relative active" : "relative"}>Earn with Us</Link>
        <Link href="/" className={activeLink.includes('/') ? "relative active" : "relative"}>Home</Link>
        <Link href="/" className={activeLink.includes('contact') ? "relative active" : "relative"}>Contact us</Link>
        <Link href="/" className={activeLink.includes('blogs') ? "relative active" : "relative"}>Blogs</Link>
    </header>
  )
}

export default Header