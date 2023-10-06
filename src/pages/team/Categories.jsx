import { useState } from "react"
import { Text } from "../../containers/Languages"

const Categories = ({styles,handleCategories,cat}) => {
    const [active,setActive]=useState("all");
    const handleClick=(item)=>{
        handleCategories(item)
        setActive(item)
    }
    const categories=["all","managers","designers","mobile-developer","web-developer","non-technical","others"].map((c,index)=>{
        return <li key={index} className={`${active==c?styles.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} role="button" onClick={()=>handleClick(c)}><Text tid={"team.categories."+c} />{cat==active}</li>
    });

    return (
        <ul className={`${styles.categories} ${styles.grey} d-flex flex-column flex-lg-row align-items-center border border-1 rounded-3 justify-content-between m-5 gap-1`}>
            {categories}
        </ul>
    )
}

export default Categories