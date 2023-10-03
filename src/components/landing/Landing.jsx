/* eslint-disable no-unused-vars */
import './landing.css'
import { Text } from "../../containers/Languages";
import face1 from '../../assets/face (1).png'
import face2 from '../../assets/face (2).png'
import face3 from '../../assets/face (3).png'
import face4 from '../../assets/face (4).png'
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
            <div className="landing-bottom">
               <div className="container d-flex align-items-center gap-3">
                <div className="land-cont">
                    <h4><Text tid="landing.landing-bottom.land-head"/></h4>
                    <p style={{width:"69%"}} className='land-para'><Text tid="landing.landing-bottom.land-para"/></p>
                </div>
                <div className="land-soical" style={{width:'30%'}}>
                    <p style={{fontSize:"20px"}} ><Text tid="landing.landing-bottom.land-social"/></p>
                    <div className="soical-cont d-flex gap-3 mt-1">
                        <a href="https://www.facebook.com/people/Make-Your-Miracle-MYM/100094065639945/"><img src={face1} style={{width:"20px"}} alt="" /></a>
                        <a href="https://twitter.com/MYM_Miracle"><img src={face2} alt="" style={{width:"20px"}}/></a>
                        <a href="https://www.instagram.com/mym_miracle/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><img src={face3} alt=""style={{width:"20px"}} /></a>
                        <a href="https://www.linkedin.com/company/mym-make-your-miracle/?viewAsMember=true"><img src={face4}style={{width:"20px"}} alt="" /></a>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Landing;
