"use client"
import React, { useContext, useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { ThemeContext } from '@/context/ThemContext'
const AuthLinks = () => {
  //temporary
  const { theme } = useContext(ThemeContext)
  const[open,setOpen]=useState(false)
  const {status}=useSession()
  return (
    <>
  {
    status==="unauthenticated" ?
    (
      <Link href="/login" className={styles.link}>Login</Link>
    ):(
      <>
      <Link href="/write" className={styles.link}>Write</Link>
      <span className={styles.link} onClick={signOut}>Logout</span>
      </>
    )
  }
  <div className={styles.burger} onClick={()=>setOpen(!open)}>
    <div className={styles.line} 
    style={
      open ? {display:"hidden"}:{ width:"100%" , height:"2px",backgroundColor:theme==="dark"? "white": "black"}
    }
    ></div>
    <div className={styles.line} style={
      open ? {width:"100%" , height:"2px",backgroundColor:theme==="dark"? "white": "black",rotate:"40deg",translate:"2px 3px"}:{ width:"100%" , height:"2px",backgroundColor:theme==="dark"? "white": "black"}
    }></div>
    <div className={styles.line}
    style={
      open ? { width:"100%" , height:"2px",backgroundColor:theme==="dark"? "white": "black",rotate:"-44deg",translate:"1px -3px"}:{ width:"100%" , height:"2px",backgroundColor:theme==="dark"? "white": "black"}
    }
    ></div>
  </div>
  {
    open &&  (
      <div className={styles.container} >
      <Link href="/" >Homepage</Link>
      <Link href="/" >About</Link>
      <Link href="/" >Contact</Link>
      {
    status==="unauthenticated" ?
    (
      <Link href="/login">Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={styles.span} onClick={signOut}>Logout</span>
      </>
    )
  }
      </div>
    )
  }
    </>
  )
}

export default AuthLinks
