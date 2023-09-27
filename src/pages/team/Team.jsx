/* eslint-disable no-unused-vars */
import React from "react";
import styles from './Team.module.css';
import Heading from "./Heading";
import Categories from "./Categories";
import OurTeam from "./OurTeam";
import Pagination from "./Pagination";

const Team = () => {
    return(
        <section className="our-team container text-center mt-4 mb-5">
            <Heading styles={styles}/>
            <Categories styles={styles}/>
            <OurTeam styles={styles}/>
            <Pagination styles={styles}/>
        </section>
    );
};

export default Team;
