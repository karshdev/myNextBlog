"use client"
import { useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image';
const Contact = () => {
  const[send,setSend]=useState(false)
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a37e1e3d-c127-4bfd-8368-e0b1b88d4361");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      setSend(true)
        console.log(result);
    }
}
  return (
    
      <div className={styles.container}>
      <section className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" className={styles.input} name="name" required />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" className={styles.input} name="email" required />

        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea  id="message" className={styles.input} name="message" rows="4" required></textarea>

        <button className={styles.button} type="submit">Submit</button>
        {
          send && 
        <div className={styles.bottomContainer}>
          <Image src="https://icons.veryicon.com/png/o/file-type/ppdash/done-4.png" alt='' width={20} height={20} style={{}}/>
      <span style={{fontSize:"17px",colorg:"green"}}>Your message has been recorded successfully</span>
        </div>
}
      </form>
    </section>
    </div>
 
  )
}

export default Contact
