import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import styles from './page.module.css'
const Contact = () => {
  return (
    
      <div className={styles.container}>
      <section className={styles.contact}>
      <form className={styles.form}>
        
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" className={styles.input} name="name" required />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" className={styles.input} name="email" required />

        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea  id="message" className={styles.input} name="message" rows="4" required></textarea>

        <button className={styles.button} type="submit">Submit</button>
      </form>
    </section>
    </div>
 
  )
}

export default Contact
