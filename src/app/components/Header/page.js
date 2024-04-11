'use client'
import styles from './header.module.css'
import { useState,useEffect } from 'react'

export default function HeaderNav (){

    const[navList,setNavList] = useState(["SHOP","SKILLS","STORIES","ABOUT","CONTACT US"])

    const[showMenu,setShowMenu] = useState(false)

    const onHandleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <nav className={styles.headerNav}>
            <div className={styles.child1}>
                <div className={styles.logoImage}>
                <img src = "/Assets/toggle.png" onClick={onHandleShowMenu}/>
                    <img src='./Assets/Logo.png'/>
                </div>
                <div className={styles.align}>
                    <h2>LOGO</h2>
                    </div>
                <div className={styles.iconContainer}>
                <img src='./Assets/Icons/search-normal.png'/>
                <img src='./Assets/Icons/heart.png'/>
                <img src='./Assets/Icons/shopping-bag.png'/>
                <img src='./Assets/Icons/profile.png'/>
                <img src='./Assets/Icons/Language.png' id={styles.languageIcon}/>

                </div>
            </div>

            <div className={styles.child2}>
                <nav className={styles.child2Nav}>
                    {navList.map((ele)=> {
                        return(
                            <li>
                                {ele}
                            </li>
                        )
                    })}
                </nav>
            </div>

            {showMenu?<div className={styles.showMenu}>
                <div>
                    {navList.map((ele)=> {
                        return(
                            <li>
                                {ele}
                            </li>
                        )
                    })}
                    </div>
            </div>:""}
        </nav>
    )
}