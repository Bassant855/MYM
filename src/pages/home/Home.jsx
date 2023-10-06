/* eslint-disable no-unused-vars */
import React from "react";
import Landing from "../../components/landing/Landing";
import Portfolio from "../../components/Portfolio/Portfolio";
import Service from "../../components/service/Service";
import Help from "../../components/help/Help";
import Contact from "../../components/ContactUs/Contact";
import Certificate from "../../components/Certificate/Certificate";
import ClientsFeedback from "../../components/ClientsFeedback/ClientsFeedback";
import Expert from "../../components/Expert/Expert";

const Home = () => {
    return (
        <div>
            <Landing />
            <Service />
            <Portfolio />
            <Help />
            <ClientsFeedback />
            <Expert />
            <Certificate />
            <Contact />
        </div>
    );
};

export default Home;
