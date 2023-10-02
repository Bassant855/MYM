/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./About.module.css";
import { Text } from "../../containers/Languages";
import about from "../../assets/about.png";
import mission1 from "../../assets/mission1.png";
import mission2 from "../../assets/mission2.png";
import mission3 from "../../assets/mission3.png";

const About = () => {
  return (
    <div className={styles.div}>
      <div className="container">
        <div className={styles.headContainer}>
          <h2 style={{ color: "var(--red-color)", fontWeight: "bold" }}>
            <Text tid="about-us.about" />
          </h2>
          <p style={{ color: "var(--grey-color)", fontWeight: "500" }}>
            <Text tid="about-us.about-para" />
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div
            style={{ color: "var(--grey-color)" }}
            className={styles.aboutInfo}
          >
            <p className="py-3">
              <Text tid="about-us.about-content1" />
            </p>
            <p className="py-3">
              <Text tid="about-us.about-content2" />
            </p>
            <p className="py-3">
              <Text tid="about-us.about-content3" />
            </p>
          </div>
          <div style={{ width: "30%" }} className={styles.aboutImg}>
            <img src={about} alt="" style={{ width: "100%" }} />
          </div>
        </div>

        <div className={styles.headContainer}>
          <h2 style={{ color: "var(--red-color)", fontWeight: "bold" }}>
            <Text tid="about-us.mission" />
          </h2>
          <p style={{ color: "var(--grey-color)", fontWeight: "500" }}>
            <Text tid="about-us.mission-para" />
          </p>
        </div>

        <div className={styles.missionContent}>
          <div className={styles.missionImg}>
            <div className={styles.imgContainer}>
              <img src={mission2} alt="" style={{ width: "100%" }} />
              <img src={mission1} alt="" style={{ width: "100%" }} />
            </div>
            <div
              style={{ color: "var(--grey-color)" }}
              className={`${styles.aboutInfo} ${styles.aboutInfoSmall}`}
            >
              <Text tid="about-us.mission-content" />
            </div>
            <div className={styles.largImg}>
              <img src={mission3} alt="" style={{ width: "100%" }} />
            </div>
          </div>

          <div
            style={{ color: "var(--grey-color)" }}
            className={`${styles.aboutInfo} ${styles.aboutInfoBig}`}
          >
            <Text tid="about-us.mission-content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
