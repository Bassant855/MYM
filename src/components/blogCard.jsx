import React, { useContext, useState } from "react";
import classes from "../pages/blog/Blog.module.css";
import { LanguageContext } from "../containers/Languages";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedIn.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/X.svg";
import heart from "../assets/heart.svg";
import { Text } from "../containers/Languages";
const BlogCard = (props) => {
  const {
    nameEn,
    describtionEn,
    nameAr,
    describtionAr,
    date,
    views,
    likes,
    linkedInLink,
    instagramLink,
    facebookLink,
    xLink,
    isFav,
    img,
  } = props;

  const languageContext = useContext(LanguageContext);
  const [fav,setFav]=useState(isFav);
  const handleFavClick=()=>{
    setFav(isFav==true?false:true);
  }
  return (
    <div className={`${classes["blog-card"]}`}>
      <div className={`${classes["blog-card-data-img"]}`}>
        <div className={classes.imgContainer}>
            <img src={img} alt="blogImg" />
        </div>
        
        <div className={`${classes["blog-card-data"]}`}>
          <div className={`${classes["blog-card-data-l1"]}`}>
            <h5>{languageContext.userLanguage === "en" ? nameEn : nameAr}</h5>
            <p>{date}</p>
          </div>
          <div>
            <p>
              {languageContext.userLanguage=="en" ? describtionEn: describtionAr}
            </p>
          </div>

        </div>
      </div>
      <div className={`${classes["sep-line"]}`}></div>

      <div className={`${classes["social-data"]}`}>
        <div className={`${classes["social-data-analytics"]}`}>
            <p><span>{likes}</span> <Text tid="our-blog.likes"/></p>
            <p><span>{views}</span> <Text tid="our-blog.views"/></p>
        </div>
        <div className={`${classes["social-data-links"]}`}>
            <div><a href={facebookLink}><img src={facebook} alt="" /></a></div>
            <div><a href={linkedInLink}><img src={linkedIn} alt="" /></a></div>
            <div><a href={instagramLink}><img src={insta} alt="" /></a></div>
            <div><a href={xLink}><img src={twitter} alt="" /></a></div>
            <button onClick={handleFavClick}><img src={heart} alt="" /></button>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
