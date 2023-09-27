/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { team } from "./TeamData";

const TeamBox = ({styles}) => {
    const teams=team.map(t=>{
        return(
            <div key={t.id} className="col-3 pb-5">
                <div className={`${styles.box} pb-5 position-relative`}>
                    <img className="img-fluid pb-5" src={t.profile} alt={t.name} />
                    <div className={`${styles.text} card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}>
                        <p className="fw-medium fs-5">{t.name}</p>
                        <span className={`${styles.grey} mb-3`}>{t.title}</span>
                        <div className={`${styles.icons} d-flex align-items-center justify-content-center gap-3`}>
                            {t.links.map(link=>{
                                return(
                                    <Link to={link.link} key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                    className={`${styles.icon} border border-1 rounded-circle p-3`} role="button">
                                        <img className="img-fluid" src={link.image} alt="" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
        {teams}
        </>
    )
}

export default TeamBox;