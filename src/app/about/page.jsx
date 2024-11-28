import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import CoverPhoto from '/public/coverPhoto.jpg'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={CoverPhoto} fill={true} alt='about page cover photo' className={styles.img}/>
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>creative thinker</h1>
        <h2 className={styles.imgDesc}>Life long learner</h2>
      </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who am I?</h1>
        <p className={styles.desc}>Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum sem etiam senectus id gravida donec ac. Montes diam maecenas neque sem fames lorem nec sit. Dapibus ullamcorper penatibus elementum fermentum bibendum curabitur nunc. Sagittis tortor inceptos mauris suspendisse vitae. Bibendum a venenatis; posuere lectus ipsum diam elementum. Nec rutrum litora dolor sodales maecenas a. Nisi feugiat auctor convallis praesent duis eget elementum urna.</p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Who am I?</h1>
      </div>
      </div>

    </div>
  )
}

export default About