/* eslint-disable no-unused-vars */
import React from "react";
import TeamBox from "./TeamBox";


const OurTeam = ({styles,cat,page,teamCat}) => {
    return (
        <div className={`${styles.team}`}>
                <div className="row gy-2">
                    <TeamBox styles={styles} cat={cat} page={page} teamCat={teamCat}/>
                </div>
            </div>
    )
}

export default OurTeam