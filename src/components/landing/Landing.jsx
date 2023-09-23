/* eslint-disable no-unused-vars */
import React from "react";
import { Text } from "../../containers/Languages";

import landingImg from "../../assets/landing-img.png";

const Landing = () => {
    return (
        <div className="landing my-5">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="landing-content">
                    <h1
                        style={{
                            width: "75%",
                            fontSize: "45px",
                            fontWeight: "bold",
                        }}
                        className="landing-heading"
                    >
                        <Text tid="landing.before-span" />
                        <span className="red-word">
                            <Text tid="landing.span" />
                        </span>
                        <Text tid="landing.after-span" />
                    </h1>
                    <p style={{ color: "var(--dark-grey)", fontWeight: "500" }}>
                        <Text tid="landing.para" />
                    </p>
                    <div className="d-flex gap-3 my-5 btn-container">
                        <button className="red-btn">
                            <Text tid="landing.red-btn" />
                        </button>
                        <button className="trans-btn">
                            <Text tid="landing.trans-btn" />
                        </button>
                    </div>
                </div>
                <div className="landing-img" style={{ width: "45%" }}>
                    <img src={landingImg} alt="" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    );
};

export default Landing;
