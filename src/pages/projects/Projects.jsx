/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { LanguageContext, Text } from "../../containers/Languages";
import img from "../../assets/Image.png";
import linked from "../../assets/Icon.png";
import { Container, Image, TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
    {
        id: 1,
        nameAr: "نرمين فارس",
        nameEn: "nermeen fares",
        category: "ui",
        titleEn: "UI/UX Designer",
        titleAr: "مصمم واجهات المستخدم",
        imgSrc: { img },
    },
    {
        id: 2,
        nameAr: "نرمين فارس",
        nameEn: "nermeen fares",
        category: "web",
        titleEn: "Frontend Developer",
        titleAr: "مطور الواجهات الامامية",
        imgSrc: { img },
    },
    {
        id: 3,
        nameAr: "نرمين فارس",
        nameEn: "nermeen fares",
        category: "web",
        titleEn: "Backend Developer",
        imgSrc: { img },
        titleAr: "مطور الواجهات الخلفية",
    },
    {
        id: 4,
        nameAr: "نرمين فارس",
        nameEn: "nermeen fares",
        category: "web",
        titleEn: "Backend Developer",
        imgSrc: { img },
        titleAr: "مطور الواجهات الخلفية",
    },
    {
        id: 5,
        nameAr: "نرمين فارس",
        nameEn: "nermeen fares",
        category: "web",
        titleEn: "Frontend Developer",
        imgSrc: { img },
        titleAr: "مطور الواجهات الامامية",
    },
];
const Projects = () => {
    const [btnCategory, setBtnCategory] = useState("all");
    const [list, setList] = useState([]);

    const btnCategoryHandler = (e) => {
        setBtnCategory(e.target.dataset.filter);
    };

    useEffect(() => {
        if (btnCategory === "all") {
            setList(DUMMY_DATA);
        } else {
            setList(DUMMY_DATA.filter((item) => item.category === btnCategory));
        }
    }, [btnCategory]);
    return (
        <Container>
            <section className={classes["JOBS-jobs"]} id="jobs">
                <div className={`${classes["JOBS-jobs__content"]} container`}>
                    <h2 className={`${classes["JOBS-jobs__title"]}`}>
                        <Text tid={"Projects.title.black-text"} />
                        <span className={`${classes["JOBS-jobs__title--red"]}`}>
                            <Text tid={"Projects.title.red-text"} />
                        </span>
                    </h2>

                    <p className={`${classes["JOBS-jobs__text"]}`}>
                        <Text tid="career.jobs.text" />
                    </p>

                    <div className={`${classes["JOBS-jobs__categories"]}`}>
                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "all"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="all"
                        >
                            <Text tid="career.jobs.categories.category_1" />
                        </button>

                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "ui"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="ui"
                        >
                            <Text tid="career.jobs.categories.category_2" />
                        </button>

                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "mobile"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="mobile"
                        >
                            <Text tid="career.jobs.categories.category_3" />
                        </button>

                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "web"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="web"
                        >
                            <Text tid="career.jobs.categories.category_4" />
                        </button>

                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "non-tech"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="non-tech"
                        >
                            <Text tid="career.jobs.categories.category_5" />
                        </button>

                        <button
                            className={`${classes["JOBS-jobs__category"]} ${
                                btnCategory === "other"
                                    ? classes["JOBS-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="other"
                        >
                            <Text tid="career.jobs.categories.category_6" />
                        </button>
                    </div>

                    <div
                        className={`${classes["JOBS-jobs__list"]} job-list-container`}
                    >
                        <div className={`Employee`}>
                            <div className="row gy-2">
                                {list.length > 0 &&
                                    list.map((job) => (
                                        <div
                                            key={job.id}
                                            className="col-lg-3 col-sm-12 pb-5"
                                        >
                                            <div
                                                className={`box pb-5 position-relative`}
                                            >
                                                <img
                                                    className="img-fluid pb-5"
                                                    src={img}
                                                    alt={job.name}
                                                />
                                                <div
                                                    className={`text card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}
                                                    style={{
                                                        marginTop: "-2cm",
                                                        zIndex: 1,
                                                    }}
                                                >
                                                    <p className="fw-medium fs-5">
                                                        {LanguageContext.userLanguage ===
                                                        "en"
                                                            ? job.nameEn
                                                            : job.nameAr}
                                                    </p>
                                                    <span
                                                        className={`grey mb-3`}
                                                    >
                                                        {LanguageContext.userLanguage ===
                                                        "en"
                                                            ? job.titleEn
                                                            : job.titleAr}
                                                    </span>
                                                    <div
                                                        className={`icons d-flex align-items-center justify-content-center gap-3`}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {list.length === 0 && (
                            <h3
                                className={`${classes["JOBS-jobs__list--empty"]}`}
                            >
                                <Text tid="career.jobs.emptyMsg" />
                            </h3>
                        )}
                    </div>
                </div>
                <ul
                    className={`pagination d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}
                >
                    <li
                        className="border border-1 rounded-1 px-3 py-2"
                        role="button"
                    >
                        &lt;
                    </li>
                    <li
                        className={`active border border-1 rounded-1 px-3 py-2 grey`}
                        role="button"
                    >
                        01
                    </li>
                    <li
                        className={`border border-1 rounded-1 px-3 py-2 grey`}
                        role="button"
                    >
                        02
                    </li>
                    <span role="button">...</span>
                    <li
                        className={`border border-1 rounded-1 px-3 py-2 grey`}
                        role="button"
                    >
                        03
                    </li>
                    <li
                        className={`border border-1 rounded-1 px-3 py-2 grey`}
                        role="button"
                    >
                        04
                    </li>
                    <li
                        className="border border-1 rounded-1 px-3 py-2"
                        role="button"
                    >
                        &gt;
                    </li>
                </ul>
            </section>
        </Container>
    );
};

export default Projects;
