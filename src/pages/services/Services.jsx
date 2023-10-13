/* eslint-disable no-unused-vars */
import React from "react";
import { Text } from "../../containers/Languages";
import styles from "./Services.module.css";
import appDevImg from "../../assets/Hand coding-cuate 1.png";
import webDevImg from "../../assets/Programming-pana 1.png";
import securityImg from "../../assets/Security-cuate 1.png";
import testingImg from "../../assets/QA engineers-cuate 1.png";
import uiUxImg from "../../assets/UI-UX team-pana 1.png";
import graphicImg from "../../assets/Designer life-pana 1.png";
import contactIcon from "../../assets/Property 1=Variant3.svg";
import planIcon from "../../assets/carbon_plan.svg";
import designIcon from "../../assets/carbon_graphical-data-flow.svg";
import programmingIcon from "../../assets/fluent-mdl2_code.svg";
import examIcon from "../../assets/ic_outline-search.svg";
import puplishIcon from "../../assets/dashicons_money-alt.svg";
import tipIcon from "../../assets/Tip.svg";
import clientIcon from "../../assets/fluent_people-team-toolbox-20-regular.svg";
import fastIcon from "../../assets/lightning-svgrepo-com (1) 1.svg";
import proffIcon from "../../assets/medal-ribbon-star-svgrepo-com 1.svg";
import qualityIcon from "../../assets/briefcase-svgrepo-com (3) 1.svg";

const services = [
  {
    title: "services.our-services.app-title",
    content: "services.our-services.app-content",
    image: appDevImg,
  },
  {
    title: "services.our-services.web-title",
    content: "services.our-services.web-content",
    image: webDevImg,
  },
  {
    title: "services.our-services.cyberSecurity-title",
    content: "services.our-services.cyberSecurity-content",
    image: securityImg,
  },
  {
    title: "services.our-services.testing-title",
    content: "services.our-services.testing-content",
    image: testingImg,
  },
  {
    title: "services.our-services.design-title",
    content: "services.our-services.design-content",
    image: uiUxImg,
  },
  {
    title: "services.our-services.graphicDesign-title",
    content: "services.our-services.graphicDesign-content",
    image: graphicImg,
  },
];

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

const whyUs = [
  {
    title: "services.why-us.client-title",
    content: "services.why-us.client-content",
    icon: clientIcon,
  },
  {
    title: "services.why-us.fast-title",
    content: "services.why-us.fast-content",
    icon: fastIcon,
  },
  {
    title: "services.why-us.proff-title",
    content: "services.why-us.proff-content",
    icon: proffIcon,
  },
  {
    title: "services.why-us.quality-title",
    content: "services.why-us.quality-content",
    icon: qualityIcon,
  },
];

const Services = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="d-flex flex-column align-items-center gap-2">
          <p className={styles.mainHeading}>
            <Text tid="services.our-services.main-heading" />
            <span className="red-word">
              <Text tid="services.our-services.heading-span" />
            </span>
          </p>

          <p className={styles.headingContent}>
            <Text tid="services.our-services.heading-content" />
          </p>
        </div>

        <div className="my-3 d-flex flex-column gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceContainer}  ${
                index % 2 !== 0 ? `${styles.flexReverse}` : ""
              }`}
            >
              <div className={styles.serviceImg}>
                <img src={service.image} alt="" className="img-fluid" />
              </div>

              <div className={styles.serviceInfo}>
                <p className={styles.serviceTitle}>
                  <Text tid={service.title} />
                </p>

                <p className={styles.serviceContent}>
                  <Text tid={service.content} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

          <div className={styles.allStepsContainer}>
            {workProcedure.map((step, index) => (
              <div
                key={index}
                className={`d-flex flex-column align-items-center ${styles.stepContainer} `}
              >
                <div
                  className={`d-flex align-items-center ${styles.badge} ${
                    index % 2 === 0
                      ? `${styles.topBadge}`
                      : `${styles.bottomBadge} `
                  }`}
                >
                  <img src={tipIcon} alt=""/>
                  <div className={`${styles.count} `}>
                    <span>0{index + 1}</span>
                  </div>
                  
                </div>

                <div
                  className={`d-flex flex-column gap-4 align-items-center py-5 px-4 ${
                    styles.stepBorder
                  } ${
                    index % 2 === 0
                      ? `${styles.firstBorder}`
                      : `${styles.secondBorder}`
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

      <div className="container my-5 d-flex flex-column gap-5">
        <div className="d-flex flex-column align-items-center gap-2">
          <p className={styles.mainHeading}>
            <Text tid="services.why-us.heading" />
            <span className="red-word">
              <Text tid="services.why-us.heading-span" />
            </span>
          </p>

          <p className={styles.headingContent}>
            <Text tid="services.why-us.heading-content" />
          </p>
        </div>

        <div className={` ${styles.cardsContainer} `}>
          {whyUs.map((item, index) => (
            <div key={index} className={`${styles.whyCard}`}>
              <img src={item.icon} alt="" />

              <div className={styles.whyInfo}>
                <p className={styles.whyTitle}>
                  <Text tid={item.title} />
                </p>

                <p className={styles.whyContent}>
                  <Text tid={item.content} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
