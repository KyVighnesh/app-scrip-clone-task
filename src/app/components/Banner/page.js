'use client'
import styles from './banner.module.css'

export default function Banner() {


    return(
        <main className={styles.mainContainer}>
            <div className={styles.bannerTop}>
                <span>HOME</span> | <span>SHOP</span>
            </div>
        <div className={styles.bannerContainer}>
            <main className={styles.content}>
                <h3>DISCOVER OUR PRODUCTS</h3>

                <br/>

                <div className={styles.paragraph}>
                <p>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
                </div>
            </main>
        </div>
        </main>
    )
}