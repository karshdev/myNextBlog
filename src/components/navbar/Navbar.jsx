
import React from 'react'
import styles from './navbar.module.css'
import { lists } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
       {
        lists.map((list)=>(
      <Image src={`/${list.link}`} alt={list.link}  width={24} height={24} key={list.id} />
        )
        )
       }
      </div>
      <div className={styles.logo}>
        KarshBlog
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Contact</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
      
    </div>
  )
}

export default Navbar
