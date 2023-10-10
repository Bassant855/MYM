/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { LanguageContext, Text } from "../../containers/Languages";
import Slider from "react-slick";
import fimg from "../../assets/Avatar4.png";
import simg from "../../assets/Avatar3.png";
import style from "./Expert.module.css";

function Expert() {
    const [indx, setIndx] = useState(0);

    const { userLanguage } = useContext(LanguageContext);

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={`${style.arrow} ${style.right} justify-content-center align-content-center align-items-center`}
                onClick={onClick}
            >
                <i className={`fa-solid fa-arrow-right ${style.icon}`}></i>
            </div>
        );
    };
    const CustomPrevArrow = (props) => {
        const { onClick } = props;

        return (
            <div
                className={`${style.arrow} ${style.left} justify-content-center align-content-center align-items-center`}
                onClick={onClick}
            >
                <i className={`fa-solid fa-arrow-left ${style.icon}`}></i>
            </div>
        );
    };
    const dummyProfiles = [
        {
            id: 1,
            name: "Mohamed",
            name_ar: "محمد",
            email: "mail@email.com",
            phoneNumber: "01000000000",
            profilePicture: `${fimg}`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            behance: "https://www.behance.com",
            certificate: null,
            qrCode: null,
            track: "Web Development",
            title: "Frontend Developer",
            title_ar: "مطور ويب",
            type: "Employee",
            section: "Web Development", // CATEGORY
            startDate: "2021-01-01",
            endDate: null,
        },
        {
            id: 2,
            name: "Ahmed Magdy",
            name_ar: "محمد",
            email: "mail@email.com",
            phoneNumber: "01000000000",
            profilePicture: `${simg}`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            behance: "https://www.behance.com",
            certificate: null,
            qrCode: null,
            track: "Web Development",
            title: "Frontend Developer",
            title_ar: "مطور ويب",
            type: "Employee",
            section: "Web Development", // CATEGORY
            startDate: "2021-01-01",
            endDate: null,
        },
        {
            id: 3,
            name: "Mohamed",
            name_ar: "محمد",
            email: "mail@email.com",
            phoneNumber: "01000000000",
            profilePicture: `${fimg}`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            behance: "https://www.behance.com",
            certificate: null,
            qrCode: null,
            track: "Web Development",
            title: "Frontend Developer",
            title_ar: "مطور ويب",
            type: "Employee",
            section: "Web Development", // CATEGORY
            startDate: "2021-01-01",
            endDate: null,
        },
        {
            id: 4,
            name: "Ahmed Magdy",
            name_ar: "محمد",
            email: "mail@email.com",
            phoneNumber: "01000000000",
            profilePicture: `${simg}`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            behance: "https://www.behance.com",
            certificate: null,
            qrCode: null,
            track: "Web Development",
            title: "Frontend Developer",
            title_ar: "مطور ويب",
            type: "Employee",
            section: "Web Development", // CATEGORY
            startDate: "2021-01-01",
            endDate: null,
        },
        {
            id: 5,
            name: "Ali",
            name_ar: "محمد",
            email: "mail@email.com",
            phoneNumber: "01000000000",
            profilePicture: `${fimg}`,
            facebook: "https://www.facebook.com",
            linkedin: "https://www.linkedin.com",
            github: "https://www.github.com",
            behance: "https://www.behance.com",
            certificate: null,
            qrCode: null,
            track: "Web Development",
            title: "Frontend Developer",
            title_ar: "مطور ويب",
            type: "Employee",
            section: "Web Development", // CATEGORY
            startDate: "2021-01-01",
            endDate: null,
        },
    ];
    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: (index) => {
            setIndx(index);
        },
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    const obj = dummyProfiles[indx];
    return (
        <div className={`py-5 overflow-hidden`}>
            <div className={`text-center pb-5 mb-5 fs-1 fw-bold`}>
                <Text tid="Expert.title.black" />
                <span className="text-danger">
                    <Text tid="Expert.title.red" />
                </span>
            </div>
            <div className="container col-lg-9 col-md-10 col-sm-12 m-auto">
                <Slider {...settings}>
                    {dummyProfiles.map((obj, idx) => {
                        return (
                            <div
                                className="container d-flex flex-column justify-content-center align-content-center align-items-center w-75"
                                key={idx}
                            >
                                <div
                                    className={`${style.layout} d-flex rounded-circle  justify-content-center align-content-center align-items-center `}
                                >
                                    <img
                                        src={obj.profilePicture}
                                        className={`${style.image} w-100`}
                                        alt={
                                            userLanguage === "en"
                                                ? obj.name
                                                : obj.name_ar
                                        }
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className="py-5 container  col-lg-6 col-md-9 col-sm-12 ">
                <div
                    className={`my-5 py-4 px-4 d-flex flex-column ${style.contain} col-lg-9 col-md-9 col-sm-12 m-auto`}
                    key={indx}
                >
                    <div className="d-flex flex-column justify-content-center align-items-center align-content-center gap-2">
                        <div className=" text-danger fs-3 fw-bold">
                            {userLanguage === "en" ? obj.name : obj.name_ar}
                        </div>
                        <div className="text-muted fs-4">
                            {userLanguage === "en" ? obj.title : obj.title_ar}
                        </div>
                    </div>
                    <div className="mt-3 d-flex flex-row gap-5 justify-content-center align-items-center align-content-center ">
                        <a
                            href={obj.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${style.link} d-flex justify-content-center align-items-center align-content-center rounded-circle `}
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a
                            href={obj.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${style.link} d-flex justify-content-center align-items-center align-content-center rounded-circle `}
                        >
                            <i className="fab fa-behance fa-2x"></i>
                        </a>
                        <a
                            href={obj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${style.link} d-flex justify-content-center align-items-center align-content-center rounded-circle `}
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expert;
