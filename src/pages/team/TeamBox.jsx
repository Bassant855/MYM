/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LanguageContext, Text } from "../../containers/Languages";
import email from '../../assets/Our Team/icons/baseline-email.svg';
import facebook from '../../assets/Our Team/icons/baseline-facebook.svg';
import linkedin from '../../assets/Our Team/icons/linkedin.svg'
import github from '../../assets/Our Team/icons/github-filled.svg'
import behance from '../../assets/Our Team/icons/behance.svg'
import { useContext, useEffect, useState } from "react";
import { TeamContext } from "./store/TeamContext";

const TeamBox = ({styles}) => {
    const {data,boxesCount} = useContext(TeamContext);
    const icons=[email,facebook,linkedin,github,behance];

    useEffect(()=>{
        boxesCount();
    },[data.cat]);
    
    const [teamData,setTeamData]=useState([]);
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const td=[]
        for(let i=(data.page-1)*8; i<data.page*8; i++){
            if(data.teamCat[i]==undefined){
                break;
            }
            td.push(data.teamCat[i]);
        }
        setTeamData(td);
    },[data.teamCat,data.page])
    

    const teams=teamData.map(t=>{
        return(
            <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                <div className={`${styles.box} pb-5 position-relative`}>

                    <img className="img-fluid pb-5" src={t.profilePicture} alt={
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage == "en" ? t.name: t.name_ar}
                            </LanguageContext.Consumer>
                        } />
                        
                    <div className={`${styles.text} card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}>

                        <p className="fw-medium fs-5">{
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage  == "ar" && t.name_ar ? t.name_ar: t.name}
                            </LanguageContext.Consumer>
                        }</p>

                        <span className={`${styles.grey} mb-3`}>
                           {t.track}
                        </span>

                        <div className={`${styles.icons} d-flex align-items-center justify-content-center gap-3`}>
                            {[t.email,t.facebook,t.linkedin,t.github,t.behance].map((link,index)=>{
                                if(link!=null && link!=""){
                                    return(
                                        <a href={link} target="blank" key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                        className={`${styles.icon}`}
                                        role="button">
                                            <img className="img-fluid" src={icons[index]} alt="" />
                                        </a>
                                    )
                                }
                            })}
                        </div>

                    </div>

                </div>
            </div>
        )
    })
    return (
        <>
            {teamData.length > 0 ? (
                teams
            ) : (
                <h3 className={`${styles["team-empty"]}`}>
                    <Text tid="team.emptyMsg" />
                </h3>
            )}
        </>
    )
}

export default TeamBox;
