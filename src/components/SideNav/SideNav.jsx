import React from 'react'
import styles from './SideNav.scss'
export default function SideNav() {
  return (
    <div className={styles.sidebar}>
      <aside>
      <nav className={styles.nav}>
          
          <ul className={styles.active}>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/glass">Glass</a></li>
            <li><a href="https://www.etsy.com/shop/SynthesisGlass" target="blank">Buy</a></li>
            <li><a href="/contact" target ="_blank">Contact</a></li>
          </ul>
        
        </nav>
      </aside>
    </div>
  )
}
