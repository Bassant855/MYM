import React, { useContext, useState } from "react";
import classes from "../pages/blog/Blog.module.css";
import { LanguageContext } from "../containers/Languages";
import face from "../assets/facebook.svg";
import linked from "../assets/linkedIn.svg";
import insta from "../assets/insta.svg";
import twitterX from "../assets/X.svg";
import heart from "../assets/heart.svg";
import { Text } from "../containers/Languages";
const BlogCard = (props) => {
  const {
    name,
    description,
    name_ar,
    description_ar,
    date,
    facebook,
    twitter,
    linkedIn,
    instagram,
    picture,
  } = props;

  const languageContext = useContext(LanguageContext);
  return (
    <div className={`${classes["blog-card"]}`}>
      <div className={`${classes["blog-card-data-img"]}`}>
        <div className={classes.imgContainer}>
            <img src={picture} alt="blogImg" />
        </div>
        
        <div className={`${classes["blog-card-data"]}`}>
          <div className={`${classes["blog-card-data-l1"]}`}>
            <h5>{languageContext.userLanguage === "en" ? name : name_ar}</h5>
            <p>{date}</p>
          </div>
          <div>
            <p>
              {languageContext.userLanguage=="en" ? description: description_ar}
            </p>
          </div>

        </div>
      </div>
      <div className={`${classes["sep-line"]}`}></div>

      <div className={`${classes["social-data"]}`}>
        <div className={`${classes["social-data-analytics"]}`}>
            <p><span>200</span> <Text tid="our-blog.likes"/></p>
            <p><span>100</span> <Text tid="our-blog.views"/></p>
        </div>
        <div className={`${classes["social-data-links"]}`}>
            <div><a href={facebook}><img src={face} alt="" /></a></div>
            <div><a href={linkedIn}><img src={linked} alt="" /></a></div>
            <div><a href={instagram}><img src={insta} alt="" /></a></div>
            <div><a href={twitter}><img src={twitterX} alt="" /></a></div>
            <button><img src={heart} alt="" /></button>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
