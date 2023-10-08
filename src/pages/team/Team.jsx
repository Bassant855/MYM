/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from './Team.module.css';
import Heading from "./Heading";
import Categories from "./Categories";
import OurTeam from "./OurTeam";
import Pagination from "./Pagination";

const Team = () => {
    const [cat,setCat]=useState("all");
    const handleCategories=(catID)=>{
        setCat(catID)
    }

    return(
        <section className="our-team container text-center mt-4 mb-5">
            <Heading styles={styles}/>
            <Categories styles={styles} handleCategories={handleCategories} cat={cat}/>
            <OurTeam styles={styles} cat={cat}/>
            <Pagination styles={styles}/>
        </section>
    );
};

export default Team;
