/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../../components/landing/Landing";
import Portfolio from "../../components/portfolio/Portfolio";
import Service from "../../components/service/Service";
import Help from "../../components/help/Help";

const Home = () => {
    return (
        <div>
            <Landing />
            <Service/>
            <Portfolio/>
            <Help/>
        </div>
    );
};

export default Home;
