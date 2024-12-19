import Image from 'next/image';
import styles from './page.module.css';
import Hero from '/public/hero.png'
import Button from '../components/Button/Button';

export default function Home() {
  return(
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hello, I&apos;m Jordan.<br/>A full stack web developer.</h1>
        <p className={styles.desc}>Turning ideas into reality</p>
        <Button url='/portfolio' text='See My Work'/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt='Hero' className={styles.img}/>
      </div>
    </div>
  )
}
