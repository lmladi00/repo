import React from 'react'

import styles from './style.module.css'
//class je rezz pa ne mozemo, {ime klase}, containter je posta property
const ContactBar = () => (
  <main className={styles.container}>
    <span>example@email.com</span>
    <span>+0385911122334</span>
  </main>
)

export default ContactBar