'use client'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useCallback } from "react"
import styles from './products.module.css'
import {filterToggles,recommendedOptions} from "../../../../public/staticData"




export default function Products() {

    const[products,setProducts] = useState([])

    const[show,setShow] = useState(false);

    const[recommended,setRecommended] = useState(false)

    const[sort,setSort] = useState(recommendedOptions)

    const[filterOptions,setFilterOptions] = useState([])

    const[width,setWidth] = useState("100%")

    const[inner,setInner] = useState()

    const[selected,setSelected]  = useState("RECOMMENDED")

    const handleWindowResize = ()=> {
        if(window.innerWidth<=767) {
            setInner(window.innerWidth)
        }
        
    };

 useEffect(()=> {
    axios.get('https://6614ef772fc47b4cf27d8278.mockapi.io/products').then((res)=> {

        setProducts(res.data.map((ele)=>{
            return {...ele,fav:false}
        }))

    })

    console.log(show)

    setFilterOptions(filterToggles.map((ele)=> {
        return({...ele,show:false})
    }))

    window.addEventListener('resize',handleWindowResize)

    return ()=>{
        window.removeEventListener('resize',handleWindowResize)
    }
},[])


const onHandleClickFilterMenu = () => {
    setShow(!show)

    if(inner<= "767") {
        setWidth("100%")
    }

    else if(show){
        setWidth("100%")
    }
    
    else {
        setWidth("72%")
    }
}

const onHandleClickRecommended = () => {
    setRecommended(!recommended)
}

const onHandleClickSort = (target) => {

    setSort(sort.map((ele)=> {
        if(ele.id == target.id) {
            ele.selected = true;
        }

        else {
            ele.selected = false;
        }

        return ele
    }))

    setSelected(target.option)
}

const onHandleClickFavourite = (selected) => {
    setProducts(products.map((ele)=>{
        if(ele.id == selected.id) {
            ele.fav = !ele.fav;
        }

        return ele
    }))
}
const onHandleClickShowFilterOptions = (target)=> {
    setFilterOptions(filterOptions.map((ele)=> {
        if(ele.id == target.id) {
            ele.show = !ele.show;
        }

        return ele
    }))

    console.log(target)
}


    return(
        <main className={styles.main}>
            <header className = {styles.headerSection}>
                <div className={styles.container}>
                <div className = {styles.leftContainer}>
                    <div>
                    <h4>3425 ITEMS</h4>
                    <button onClick={onHandleClickFilterMenu}>
                        <img src = {show?'./Assets/Icons/arrow-right-hide.png':'./Assets/arrow-left.png'}></img>
                        <p>{show?"HIDE FILTER":"SHOW FILTER"}</p>
                        <h4>{show?"HIDE":"FILTER"}</h4>
                    </button>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div onClick={onHandleClickRecommended} className={styles.innerChild}>
                    <h4>
                        {selected}
                        <img src="../Assets/arrow-left.png"/>
                    </h4>
                    {recommended?<div className={styles.recommendedToggle}>
                        {sort.map((ele,index)=> {
                            return(
                                <div onClick ={()=>onHandleClickSort(ele)} key={index}>
                                    {ele.selected?<img src="./Assets/Icons/tick.png" style={{rotate:'360deg'}}/>:""}
                                    <h4 style={{fontWeight:ele.selected?"800":"300"}}>{ele.option}</h4>
                                </div>
                            )
                        })}
                    </div>:""}
                    </div>
                </div>
                </div>
            </header>
            {/* //-----------------------------------------------------------------------------------------------------------------------*/}
            <section className={styles.productSection}>
                <div className= {styles.productSectionContainer}>

                    {show?<aside className={styles.filterBar}>
                    <div className={styles.custom}>
                    <input type="checkbox"/>
                    <h4>CUSTOMIZABLE</h4>  
                    </div>
                    <section className={styles.filterOptions}>
                        {filterOptions.map((ele,index)=> {
                            return(
                                <div className={styles.filterChild} key={index}>
                                    <div>
                                    <h4>{ele.title}</h4>
                                    <img src="../Assets/arrow-left.png" onClick={()=>onHandleClickShowFilterOptions(ele)}/>
                                    </div>

                                    <span>{ele.option1}
                                    </span>
                                    {ele.show?<div className={styles.innerFilterChild}>
                                    <a><p style={{color:'#BFC8CD',textDecoration:"underline"}}>{ele.toggle}</p></a>
                                    <p><input type="checkbox"/>{ele.option2}</p>
                                    <p><input type="checkbox"/>{ele.option3}</p>
                                    <p><input type="checkbox"/>{ele.option4}</p>
                                    </div>:""}
                                    
                                </div>
                            )
                        })}
                    </section>
                </aside>:""}
                <article className={styles.productList} style={{width:width}}>
                    {products.map((element,index)=> {
                        return(
                            <div className={styles.card} key={index}>
                                <img src={element.image}/>
                                <div className={styles.heartIcon}>
                                <h5>{element.title.toUpperCase()}</h5>
                                <img src={element.fav?"./Assets/Icons/red heart.png":"./Assets/Icons/heart.png"} onClick={()=>onHandleClickFavourite(element)}/>
                                </div>
                                <h6>{element.description}</h6>
                            </div>
                        )
                    })}
                </article>
                </div>
            </section>
        </main>
    )
}
