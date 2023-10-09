/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import style from "./ClientsFeedback.module.css";
import { Text } from "../../containers/Languages";
import Slider from "react-slick";
import fimg from "../../assets/Avatar4.png";
import simg from "../../assets/Avatar3.png";
function ClientsFeedback() {
    const CustomPrevArrow = (props) => (
        <div
            className={`${style.arrow} ${style.left} justify-content-center align-content--center align-items-center`}
            onClick={props.onClick}
        >
            <i className={`fa-solid fa-arrow-left ${style.icon}`}></i>
        </div>
    );

    const CustomNextArrow = (props) => (
        <div
            className={`${style.arrow} ${style.right} justify-content-center align-content-center align-items-center`}
            onClick={props.onClick}
        >
            <i className={`fa-solid fa-arrow-right ${style.icon}`}></i>
        </div>
    );
    const arr = [
        {
            name: "John Doe",
            feedback:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            image: `${fimg}`,
        },
        {
            name: "Jane Smith",
            feedback:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: `${simg}`,
        },
        {
            name: "Alice Johnson",
            feedback:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: `${fimg}`,
        },
        {
            name: "Bob Brown",
            feedback:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: `${simg}`,
        },
        {
            name: "Eva Garcia",
            feedback:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: `${fimg}`,
        },
        {
            name: "Michael Wilson",
            feedback:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            image: `${simg}`,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    return (
        <div className={`py-3 my-3 ${style.bg} overflow-hidden`}>
            <div className="mt-5 py-1  text-center fw-bold fs-1 ">
                <Text tid="Client.title.black" />
                <span className={`${style.fColor}`}>
                    <Text tid="Client.title.red" />
                </span>
            </div>
            <div className={`${style.py}  col-9  m-auto`}>
                <Slider {...settings}>
                    {arr.map((obj, indx) => {
                        return (
                            <div
                                className={`my-5 py-4 px-4 d-flex flex-column ${style.contain} w-75
                  m-auto`}
                                key={indx}
                            >
                                <div className="d-flex flex-column flex-lg-row flex-md-row  align-items-center align-content-center gap-3">
                                    <div className={`${style.image}  `}>
                                        <img
                                            src={obj.image}
                                            className={`w-100 ${style.image}`}
                                            alt={obj.name}
                                        />
                                    </div>
                                    <div className="fs-4">{obj.name}</div>
                                </div>
                                <div className={`mt-3 ${style.font} fs-5`}>
                                    {obj.feedback}
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default ClientsFeedback;
