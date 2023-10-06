/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../containers/Languages";
import classes from "./Career.module.css";
import { Text } from "../../containers/Languages";
import { HashLink } from "react-router-hash-link";
import CareerWhyCard from "../../components/careerWhyCard/CareerWhyCard";

import ImageWhy1 from "../../assets/career_why_1.png";
import ImageWhy2 from "../../assets/career_why_2.png";
import ImageWhy3 from "../../assets/career_why_3.png";

const DUMMY_DATA = [
    {
        id: 1,
        category: "ui",
        titleEn: "UI/UX Designer",
        titleAr: "مصمم واجهات المستخدم",
        keyEn: ["Senior", "Full time"],
        keyAr: ["محترف", "دوام كامل"],
    },
    {
        id: 2,
        category: "web",
        titleEn: "Frontend Developer",
        titleAr: "مطور الواجهات الامامية",
        keyEn: ["Remotely", "Senior", "internship paid", "Full time"],
        keyAr: ["عن بعد", "محترف", "تدريب مدفوع", "دوام كامل"],
    },
    {
        id: 3,
        category: "web",
        titleEn: "Backend Developer",
        titleAr: "مطور الواجهات الخلفية",
        keyEn: ["Offline", "Senior", "internship paid", "Full time"],
        keyAr: ["في الشركة", "محترف", "تدريب مدفوع", "دوام كامل"],
    },
    {
        id: 4,
        category: "web",
        titleEn: "Backend Developer",
        titleAr: "مطور الواجهات الخلفية",
        keyEn: ["Remotely", "Senior", "Full time"],
        keyAr: ["عن بعد", "محترف", "دوام كامل"],
    },
    {
        id: 5,
        category: "web",
        titleEn: "Frontend Developer",
        titleAr: "مطور الواجهات الامامية",
        keyEn: ["Remotely", "Senior", "Full time"],
        keyAr: ["عن بعد", "محترف", "دوام كامل"],
    },
];

const JobItem = ({ job }) => {
    const languageContext = useContext(LanguageContext);

    return (
        <div className={`${classes["career-jobs__item"]}`} id={`job-${job.id}`}>
            <div className={`${classes["career-jobs__item__content"]}`}>
                <h3 className={`${classes["career-jobs__item__title"]}`}>
                    {languageContext.userLanguage === "en"
                        ? job["titleEn"]
                        : job["titleAr"]}
                </h3>
                <p className={`${classes["career-jobs__item__keys"]}`}>
                    {languageContext.userLanguage === "en"
                        ? job["keyEn"].join(" | ")
                        : job["keyAr"].join(" | ")}
                </p>
            </div>
            <a
                href="#"
                className={`${classes["career-jobs__item__btn"]} red-btn`}
            >
                <Text tid="career.jobs.btn" />
            </a>
        </div>
    );
};

const Career = () => {
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
        <div className={`${classes["career-page"]}`}>
            <section className={classes["career-hero"]}>
                <div className={`${classes["career-hero__content"]} container`}>
                    <h2 className={`${classes["career-hero__title"]}`}>
                        <Text tid={"career.hero.title"} />
                    </h2>
                    <p className={`${classes["career-hero__text"]}`}>
                        <Text tid={"career.hero.para"} />
                    </p>
                    <HashLink
                        to="/career#jobs"
                        className={`${classes["career-hero__btn"]} red-btn`}
                    >
                        <Text tid={"career.hero.btn"} />
                    </HashLink>
                </div>
            </section>

            <section className={`${classes["career-why"]}`}>
                <div className={`${classes["career-why__content"]} container`}>
                    <h2 className={`${classes["career-why__title"]}`}>
                        <span
                            className={`${classes["career-why__title--red"]}`}
                        >
                            <Text tid={"career.why.title.red-text"} />
                        </span>
                        <Text tid={"career.why.title.white-text"} />
                    </h2>

                    <p className={`${classes["career-why__text"]}`}>
                        <Text tid={"career.why.text"} />
                    </p>

                    <div className={`${classes["career-why__cards"]}`}>
                        <CareerWhyCard
                            title={<Text tid="career.why.cards.card_1.title" />}
                            text={<Text tid="career.why.cards.card_1.text" />}
                            img={ImageWhy1}
                        />

                        <CareerWhyCard
                            title={<Text tid="career.why.cards.card_2.title" />}
                            text={<Text tid="career.why.cards.card_2.text" />}
                            img={ImageWhy2}
                        />

                        <CareerWhyCard
                            title={<Text tid="career.why.cards.card_3.title" />}
                            text={<Text tid="career.why.cards.card_3.text" />}
                            img={ImageWhy3}
                            imgSmall={true}
                        />
                    </div>
                </div>
            </section>

            <section className={classes["career-jobs"]} id="jobs">
                <div className={`${classes["career-jobs__content"]} container`}>
                    <h2 className={`${classes["career-jobs__title"]}`}>
                        <Text tid={"career.jobs.title.black-text"} />
                        <span
                            className={`${classes["career-jobs__title--red"]}`}
                        >
                            <Text tid={"career.jobs.title.red-text"} />
                        </span>
                    </h2>

                    <p className={`${classes["career-jobs__text"]}`}>
                        <Text tid="career.jobs.text" />
                    </p>

                    <div className={`${classes["career-jobs__categories"]}`}>
                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "all"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="all"
                        >
                            <Text tid="career.jobs.categories.category_1" />
                        </button>

                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "ui"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="ui"
                        >
                            <Text tid="career.jobs.categories.category_2" />
                        </button>

                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "mobile"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="mobile"
                        >
                            <Text tid="career.jobs.categories.category_3" />
                        </button>

                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "web"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="web"
                        >
                            <Text tid="career.jobs.categories.category_4" />
                        </button>

                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "non-tech"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="non-tech"
                        >
                            <Text tid="career.jobs.categories.category_5" />
                        </button>

                        <button
                            className={`${classes["career-jobs__category"]} ${
                                btnCategory === "other"
                                    ? classes["career-jobs__category--active"]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="other"
                        >
                            <Text tid="career.jobs.categories.category_6" />
                        </button>
                    </div>

                    <div className={`${classes["career-jobs__list"]}`}>
                        {list.length > 0 &&
                            list.map((job) => (
                                <JobItem key={job.id} job={job} />
                            ))}
                        {list.length === 0 && (
                            <h3
                                className={`${classes["career-jobs__list--empty"]}`}
                            >
                                <Text tid="career.jobs.emptyMsg" />
                            </h3>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
