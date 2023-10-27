/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import style from "./ClientsFeedback.module.css";
import { Text, LanguageContext } from "../../containers/Languages";
import Slider from "react-slick";
import fimg from "../../assets/Avatar4.png";
import simg from "../../assets/Avatar3.png";
function ClientsFeedback() {
    const { userLanguage } = useContext(LanguageContext);

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
            id: 1,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${fimg}`,
        },
        {
            id: 1,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${simg}`,
        },
        {
            id: 2,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${simg}`,
        },
        {
            id: 3,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${simg}`,
        },
        {
            id: 4,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${fimg}`,
        },
        {
            id: 5,
            name: "Mohamed",
            name_ar: "محمد",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            description_ar:
                "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",

            pictureUrl: `${simg}`,
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
        <div className={`py-3 my-3 ${style.bg} overflow-hidden`} id="feedBack">
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
                                className={` d-flex flex-column ${style.contain} w-75
                  m-auto feedback-contain`}
                                key={indx}
                            >
                                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center align-content-center  gap-3">
                                    <div className={`${style.image}  `}>
                                        <img
                                            src={obj.pictureUrl}
                                            className={`w-100 ${style.image}`}
                                            alt={
                                                userLanguage === "en"
                                                    ? obj.name
                                                    : obj.name_ar
                                            }
                                        />
                                    </div>
                                    <div className="fs-4">
                                        {userLanguage === "en"
                                            ? obj.name
                                            : obj.name_ar}
                                    </div>
                                </div>
                                <div className={`my-3 pb-3 ${style.font} fs-5`}>
                                    {userLanguage === "en"
                                        ? obj.description
                                        : obj.description_ar}

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
