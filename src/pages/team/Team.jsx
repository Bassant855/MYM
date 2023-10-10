/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from './Team.module.css';
import Heading from "./Heading";
import Categories from "./Categories";
import OurTeam from "./OurTeam";
import Pagination from "./Pagination";
import { team } from "./TeamData";

const Team = () => {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const [cat,setCat]=useState("all");
    const handleCategories=(catID)=>{
        setCat(catID)
    }

    const teamCat=[];
    team.map(t=>{
        if(t.section==cat || cat=="all"){
            teamCat.push(t);
        }
    });

    const [page,setPage]=useState(1);

    return(
        <section className="our-team container text-center mt-4 mb-5">
            <Heading styles={styles}/>
            <Categories styles={styles} handleCategories={handleCategories} cat={cat} setPage={setPage}/>
            <OurTeam styles={styles} cat={cat} page={page} teamCat={teamCat}/>
            <Pagination styles={styles} setPage={setPage} teamCat={teamCat} page={page}/>
        </section>
    );
};

export default Team;
