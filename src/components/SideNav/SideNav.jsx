import React from 'react'
import styles from './SideNav.scss'
export default function SideNav() {
  return (
    <>
    <div className={styles.sidebar}>
      <aside>
      <nav className={styles.nav}>
          
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/glass">Glass</a></li>
            <li><a href="https://www.etsy.com/shop/SynthesisGlass" target="blank">Buy</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        
        </nav>
      </aside>
    </div>
    <footer className={styles.footer}>
   
    <section className={styles.navMobile}>
            <span><a href="/home">Home</a></span>
            <span><a href="/about">About</a></span>
            <span><a href="/glass">Glass</a></span>
            <span><a href="https://www.etsy.com/shop/SynthesisGlass" target="blank">Buy</a></span>
            <span><a href="/contact" >Contact</a></span>
    </section>
    
    </footer>
    </>
  )
}
