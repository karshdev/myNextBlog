import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="lama blog" width={50} height={50} />
        <h1 className={styles.logoText}>KarshBlog</h1>
      </div>
      <p className={styles.desc}>
       This is a blog website where you can post your blogs with images
       Here you will find best blogs and best blogger around you.
       Trending website in terms of blogs.
      </p>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="" width={18} height={18} />
        <Image src="/instagram.png" alt="" width={18} height={18} />
        <Image src="/tiktok.png" alt="" width={18} height={18} />
        <Image src="/youtube.png" alt="" width={18} height={18} />
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href="/">Homepage</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href="/">Style</Link>
        <Link href="/">Fashion</Link>
        <Link href="/">Coding</Link>
        <Link href="/">Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href="/">Facebook</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">Tiktok</Link>
        <Link href="/">Youtube</Link>
      </div>
    </div>
  </div>
  )
}

export default Footer
