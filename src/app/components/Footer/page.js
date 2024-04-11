'use client'
import styles from './footer.module.css'
export default function Footer() {


    return(
        <footer className = {styles.footer}>
        <section className={styles.footerContainer}>
            <main className={styles.upperMain}>
                <section className={styles.upperLeftSection}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className={styles.subscribeContainer}>
                    <input type='text' placeholder='Enter your e-mail...' className={styles.input}/>
                    <button>Subscribe</button>
                    </div>
                </section>

                <section className={styles.upperRightSection}>

                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h3>Currency</h3>
                    <div className={styles.useContainer}>
                    <img src='./Assets/United States of America (US).png' style={{height:'23px'}}/>
                    <img src='./Assets/Star 1.png' style={{height:'5px'}}/>
                    <p>USD</p>
                    </div>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </section>
            </main>

            <main className={styles.lowerMain}>
                <section className={styles.lowerLeftSection}>

                    <h3>mettā muse</h3>
                    <li>
                    About Us
                    </li>
                    <li>
                    Stories
                    </li>
                    <li>
                    Artisans
                    </li>
                    <li>
                    Boutiques
                    </li>
                    <li>
                    Contact Us
                    </li>
                    <li>
                    EU Compliances Docs
                    </li>
                </section>

                <section className={styles.lowerMidSection}>
                <h3>QUICK LINKS</h3>
                    <li>
                    Orders & Shipping
                    </li>
                    <li>
                    Join/Login as a Seller
                    </li>
                    <li>
                    Payment & Pricing
                    </li>
                    <li>
                    Return & Refunds
                    </li>
                    <li>
                    FAQs
                    </li>
                    <li>
                    Privacy Policy
                    </li>
                    <li>
                    Terms & Conditions
                    </li>
                </section>
                
                <section className={styles.lowerRightSection}>
                    <div className={styles.InnerChild}>
                    <h3>FOLLOW US</h3>
                    <div className={styles.socialIcons}>
                        <img src='./Assets/insta.png'/>
                        <img src='./Assets/linkedin.png'/>
                    </div>
                    </div>

                    <div className={styles.InnerChild}>
                        <h3>mettā muse Accepts</h3>
                        <div className={styles.upiSection}>
                        <img src='./Assets/gpay.png'/>
                        <img src='./Assets/mastercard.png'/>
                        <img src='./Assets/paypal.png'/>
                        <img src='./Assets/amex.png'/>
                        <img src='./Assets/apple.png'/>
                        <img src='./Assets/youpay.png'/>
                        </div>
                    </div>
                </section>
            </main>

        </section>

        </footer>
    )
}
