'use client'
import styles from '../TopBar/topbar.module.css'
import Link from "next/link"
import { useState } from "react"


export default function TopBar () {

    const[lorem,setLorem] = useState(['../Assets/lorem.png','../Assets/lorem.png','../Assets/lorem.png'])

    return(
        <div className={styles.mainContainer}>
           <nav className={styles.topNav}>
        {lorem.map((ele)=> {
            return(
                <div className='child-div'>
                    <img src={ele}/>
                </div>
            )
        })}
      </nav>
        </div>
    )
}