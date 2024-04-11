'use client'
import styles from './footerSmall.module.css'
import { filterOptions } from '../../../../public/staticData'
import { useEffect,useState } from 'react'


export default function FooterSmall() {

    const[sections,setSections] = useState([])

    const onHandleClickShow = (clicked) => {
        setSections(sections.map((element)=> {
            if(element.id == clicked.id) {
                element.show = !element.show;
            }

            else {
                element.show = false;
            }

            return element
        }))
    }

    useEffect(()=> {
        setSections(filterOptions)
    },[])
return(
    <footer className={styles.footer}>
        <section className={styles.sectionOne}>
            <div>
            <h3>BE THE FIRST TO KNOW</h3>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</h4>
            </div>

            <div className={styles.subscribeContainer}>
            <input type='text' placeholder='Enter your e-mail...'/>
            <button>
                <p>SUBSCRIBE</p></button>
            </div>
        </section>

        <section className={styles.sectionTwo}>
            <h3>CALL</h3>
            <div>
                <h4>+44 221 133 5360</h4>
                <img src = './Assets/Star 1.png'/>
                <h5>customercare@mettamuse.com</h5>
            </div>
        </section>

        <section className={styles.sectionThree}>
            <h3>CURRENCY</h3>
            <div>
                <img src ='./Assets/United States of America (US).png'/>
                <img src = './Assets/Star 1.png'/>
                <h4>USD</h4>
            </div>
        </section>

        {sections.map((ele,index)=> {
            return(
                <section className={styles.dropdownSections} key={index}>
                    <div className={styles.innerChild1}>
                    <h3>{ele.title1}</h3>
                    <img src='Assets/arrow-right.png' style = {{rotate:ele.show?"180deg":"",transition:"0.5s rotate"}} onClick={()=>onHandleClickShow(ele)}/>
                    </div>

                    <div>
                    {ele.show?<div className={styles.liContainer}>
                        {(index ==0 || index == 1)?<div>
                            <li>
                       {ele.title2}
                    </li>
                    <br/>
                    <li>    
                       {ele.title3} 
                    </li>
                    <br/>
                    <li>
                       {ele.title4} 
                    </li>
                    </div>:""} 
                    <br/>
                    {index ==1 ? <div><li>
                       {ele.title5} 
                    </li>
                    <br/>
                    <li>
                       {ele.title6} 
                    </li></div>:""}
                    {index == 2?
                    <div className={styles.icons}>
                    <img src={ele.image1}/>
                    <br/>
                    <img src={ele.image2}/>

                    </div>:""}
                    
                    </div>:""}
                    </div>
                </section>
            )
        })}

        <section className={styles.section4}>
            <div>
            <h3>mettā muse Accepts</h3>
            </div>
            
            <div className={styles.upiSection}>
                        <img src='./Assets/Gpay.png'/>
                        <img src='./Assets/mastercard.png'/>
                        <img src='./Assets/paypal.png'/>
                        <img src='./Assets/amex.png'/>
                        <img src='./Assets/apple.png'/>
                        <img src='./Assets/youpay.png'/>
                        </div>
                        
        </section>

    </footer>
    )
}
