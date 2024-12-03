import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Project</h1>
      <div className={styles.allItems}>
        <Link href='porlfolio/software' className={styles.item}>
          <span className={styles.title}>Software</span>
        </Link>
        <Link href='porlfolio/design' className={styles.item}>
          <span className={styles.title}>Desgin</span>
        </Link>
        <Link href='porlfolio/automation' className={styles.item}>
          <span className={styles.title}>Automation</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio