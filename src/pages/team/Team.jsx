/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState } from "react";
import styles from './Team.module.css';
import Heading from "./Heading";
import Categories from "./Categories";
import OurTeam from "./OurTeam";
import Pagination from "./Pagination";
import { TeamState } from "./store/TeamState";

const Team = () => {

    return(
        <TeamState>
        <section className="our-team container text-center mt-4 mb-5">
            <Heading styles={styles}/>
            <Categories styles={styles}/>
            <OurTeam styles={styles}/>
            <Pagination styles={styles}/>
        </section>
        </TeamState>
    );
};

export default Team;
