/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { team } from "./TeamData";
import { LanguageContext } from "../../containers/Languages";

const TeamBox = ({styles,cat}) => {
    const teams=team.map(t=>{
        let innerBox=
            <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                <div className={`${styles.box} pb-5 position-relative`}>
                    <img className="img-fluid pb-5" src={t.profile} alt={t.name} />
                    <div className={`${styles.text} card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}>
                        <p className="fw-medium fs-5">{t.name}</p>
                        <span className={`${styles.grey} mb-3`}>{
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage == "en" ? t.title.english: t.title.arabic}
                            </LanguageContext.Consumer>
                        }</span>
                        <div className={`${styles.icons} d-flex align-items-center justify-content-center gap-3`}>
                            {t.links.map(link=>{
                                return(
                                    <Link to={link.link} key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                    className={`${styles.icon} border border-1 rounded-circle`} role="button">
                                        <img className="img-fluid" src={link.image} alt="" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            if(t.category==cat){
                return innerBox;
            }else if(cat=="all"){
                return innerBox;
            }
    })
    return (
        <>
        {teams}
        </>
    )
}

export default TeamBox;