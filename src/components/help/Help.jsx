/* eslint-disable no-unused-vars */
import React from "react";
import { Text } from "../../containers/Languages";
import styles from "./Help.module.css";

import contactIcon from "../../assets/Property 1=Variant3.svg";
import planIcon from "../../assets/carbon_plan.svg";
import designIcon from "../../assets/carbon_graphical-data-flow.svg";
import programmingIcon from "../../assets/fluent-mdl2_code.svg";
import examIcon from "../../assets/ic_outline-search.svg";
import puplishIcon from "../../assets/dashicons_money-alt.svg";
import tipIcon from "../../assets/Tip.svg";


const workProcedure = [
  {
    title: "services.work-procedure.contact-title",
    content: "services.work-procedure.contact-content",
    icon: contactIcon,
  },
  {
    title: "services.work-procedure.plan-title",
    content: "services.work-procedure.plan-content",
    icon: planIcon,
  },
  {
    title: "services.work-procedure.design-title",
    content: "services.work-procedure.design-content",
    icon: designIcon,
  },
  {
    title: "services.work-procedure.programming-title",
    content: "services.work-procedure.programming-content",
    icon: programmingIcon,
  },
  {
    title: "services.work-procedure.examination-title",
    content: "services.work-procedure.examination-content",
    icon: examIcon,
  },
  {
    title: "services.work-procedure.puplish-title",
    content: "services.work-procedure.puplish-content",
    icon: puplishIcon,
  },
];


const Services = () => {
  return (
    <>
 

      <div className={` ${styles.workProcedureContainer}`}>
        <div className="container d-flex flex-column gap-5">
          <div className="d-flex flex-column align-items-center gap-2">
            <p className={styles.mainHeading}>
              <Text tid="services.work-procedure.heading" />
              <span className="red-word">
                <Text tid="services.work-procedure.heading-span" />
              </span>
            </p>

            <p className={styles.headingContent}>
              <Text tid="services.work-procedure.heading-content" />
            </p>
          </div>

          <div className={`d-flex justify-content-center flex-wrap gap-5 ${styles.helpContainer}`} >
            {workProcedure.map((step, index) => (
              <div
                key={index}
                className={`d-flex flex-column align-items-center ${styles.stepContainer} `}
              >
                <div
                  className={`d-flex flex-column align-items-center ${
                    index % 2 === 0
                      ? `${styles.topBadge}`
                      : `${styles.bottomBadge} flex-column-reverse`
                  }`}
                >
                  <div className={`${styles.count} `}>
                    <span>0{index + 1}</span>
                  </div>
                  <img src={tipIcon} alt=""/>
                </div>

                <div
                  className={`d-flex flex-column gap-4 align-items-center py-5 px-4 ${
                    styles.stepBorder
                  } ${
                    index % 2 === 0
                      ? `${styles.borderTop}`
                      : `${styles.borderBottom}`
                  }`}
                >
                  <img src={step.icon} alt="" className="w-25" />

                  <div className="d-flex flex-column align-items-center gap-2">
                    <p className={styles.stepTitle}>
                      <Text tid={step.title} />
                    </p>
                    <p className={styles.stepContent}>
                      <Text tid={step.content} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

 
    </>
  );
};

export default Services;
