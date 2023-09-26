/* eslint-disable no-unused-vars */
import React from "react";
import './Team.css';
import Heading from "./Heading";
import Categories from "./Categories";
import OurTeam from "./OurTeam";

const Team = () => {
    return(
        <section className="our-team container text-center mt-4 mb-5">
            <Heading />
            <Categories />
            <OurTeam />
                <ul className="pagination d-flex gap-2 justify-content-center align-items-center pb-5 mt-3">
                    <li className="border border-1 rounded-1 px-3 py-2" role="button">&lt;</li>
                    <li className="active border border-1 rounded-1 px-3 py-2 grey" role="button">01</li>
                    <li className="border border-1 rounded-1 px-3 py-2 grey" role="button">02</li>
                    <span role="button">...</span>
                    <li className="border border-1 rounded-1 px-3 py-2 grey" role="button">03</li>
                    <li className="border border-1 rounded-1 px-3 py-2 grey" role="button">04</li>
                    <li className="border border-1 rounded-1 px-3 py-2" role="button">&gt;</li>
                </ul>
        </section>
    );
};

export default Team;
