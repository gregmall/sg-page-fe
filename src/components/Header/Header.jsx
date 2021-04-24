import React from 'react'
import styles from './Header.scss'

export default function Header() {
  return (
    <>
    <header className = {styles.header}>
      <img src="/public/assets/pngwing.com (1).png" />
      <div className={styles.shimmer}>
    <h1>S<b>y</b>nthesis Glass</h1>
    </div>
    </header>
    </>
  )
}

