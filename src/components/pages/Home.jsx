import React from 'react'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import styles from './Home.module.css'


function Home() {
    return (
        <>
        <div className={styles.home}>
            <div className={styles.imgContainer}></div>
            <h1 className={styles.homeTitle}>Descubra lugares incríveis!</h1>
            <button className={styles.homeBtn}>Começar</button> 
        </div>
        <HeroSection/>
        <Footer/>
        </>
    )
}

export default Home
