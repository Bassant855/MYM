import './services.css';
import { Text } from "../../containers/Languages";
import serv1 from '../../assets/serv1.png'
import serv2 from '../../assets/serv2.png'
import serv3 from '../../assets/serv3.png'
import serv4 from '../../assets/serv4.png'
import rightArrow from '../../assets/right-arrow.png'
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <div className='service my-5'>
        <div className="serv-head">
            <h2 style={{fontSize:"30px", fontWeight:"bold"}}><Text tid="home-service.serv-head"/>
             <span style={{color:"var(--red-color)",fontSize:"30px",fontWeight:"bold"}}><Text tid="home-service.services-word"/></span>
            </h2>
            <p style={{color:"var(--grey-color)",fontSize:'18px'}}><Text tid="home-service.serv-para"/></p>
        </div>
        <div className='serv-cards container my-5'>

                <div className='serv-card'>
                    {/* hover */}
                    <div className='serv-hover'>
                     <p><Text tid="home-service.serv-cards.card1.service-hover.explore"/></p>
                      <p> <Text tid="home-service.serv-cards.card1.service-hover.content"/></p>
                      <div style={{width:"50px"}}>
                        <img src={rightArrow} alt=""  style={{width:"100%"}}/>
                      </div>
                       
                    </div>

                    <div style={{width:"100%",height:'200px'}}>
                        <img src={serv1} alt="" style={{width:"100%", height:"100%"}}/>
                    </div>
                    <div className="card-content">
                        <h3><Text tid="home-service.serv-cards.card1.head"/></h3>
                        <p><Text tid="home-service.serv-cards.card1.content"/></p>
                    </div>
                </div>

                <div className='serv-card'>

                    {/* hover */}
                    <div className='serv-hover'>
                     <p><Text tid="home-service.serv-cards.card2.service-hover.explore"/></p>
                      <p> <Text tid="home-service.serv-cards.card2.service-hover.content"/></p>
                      <div style={{width:"50px"}}>
                        <img src={rightArrow} alt=""  style={{width:"100%"}}/>
                      </div>
                       
                    </div>
                    <div style={{width:"100%",height:'200px'}}>
                        <img src={serv2} alt="" style={{width:"100%", height:"100%"}}/>
                    </div>
                    <div className="card-content">
                        <h3><Text tid="home-service.serv-cards.card2.head"/></h3>
                        <p><Text tid="home-service.serv-cards.card2.content"/></p>
                    </div>
                </div>


                <div className='serv-card'>

                    {/* hover */}
                    <div className='serv-hover'>
                     <p><Text tid="home-service.serv-cards.card3.service-hover.explore"/></p>
                      <p> <Text tid="home-service.serv-cards.card3.service-hover.content"/></p>
                      <div style={{width:"50px"}}>
                        <img src={rightArrow} alt=""  style={{width:"100%"}}/>
                      </div>
                       
                    </div>
                    <div style={{width:"100%",height:'200px'}}>
                        <img src={serv3} alt="" style={{width:"100%", height:"100%"}}/>
                    </div>
                    <div className="card-content">
                        <h3><Text tid="home-service.serv-cards.card3.head"/></h3>
                        <p><Text tid="home-service.serv-cards.card3.content"/></p>
                    </div>
                </div>

                <div className='serv-card'>

                    {/* hover */}
                    <div className='serv-hover'>
                     <p><Text tid="home-service.serv-cards.card4.service-hover.explore"/></p>
                      <p> <Text tid="home-service.serv-cards.card4.service-hover.content"/></p>
                      <div style={{width:"50px"}}>
                        <img src={rightArrow} alt=""  style={{width:"100%"}}/>
                      </div>
                       
                    </div>
                    <div style={{width:"100%",height:'200px'}}>
                        <img src={serv4} alt="" style={{width:"100%", height:"100%"}}/>
                    </div>
                    <div className="card-content">
                        <h3><Text tid="home-service.serv-cards.card4.head"/></h3>
                        <p><Text tid="home-service.serv-cards.card4.content"/></p>
                    </div>
                </div>
       
        </div>
            <div  style={{textAlign:'center'}}>
            <Link className='red-btn ' style={{width:"30%",minWidth:"fit-content",display:'block', margin:"auto"}} to='/services'><Text tid="home-service.serv-btn"/></Link>
            </div>
        
    </div>
  )
}

export default Service