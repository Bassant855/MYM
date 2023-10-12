/* eslint-disable no-unused-vars */
import React from "react";
import TeamBox from "./TeamBox";


const OurTeam = ({styles}) => {
    return (
        <div className={`${styles.team}`}>
                <div className="row gy-2">
                    <TeamBox styles={styles}/>
                </div>
            </div>
    )
}

export default OurTeam