import React, { useContext, useState } from "react";
import classes from "../pages/blog/Blog.module.css";
import { LanguageContext } from "../containers/Languages";
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
        <img src={img} alt="blogImg" />
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
            <p><span>{likes}</span> likes</p>
            <p><span>{views}</span> views</p>
        </div>
        <div className={`${classes["social-data-links"]}`}>
            <div><a href={facebookLink}><img src="../assets/facebook.svg" alt="" /></a></div>
            <div><a href={linkedInLink}><img src="../assets/linkedIn.svg" alt="" /></a></div>
            <div><a href={instagramLink}><img src="../assets/insta.svg" alt="" /></a></div>
            <div><a href={xLink}><img src="../assets/X.svg" alt="" /></a></div>
            <div onClick={handleFavClick}><img src="../assets/heart.svg" alt="" /></div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
