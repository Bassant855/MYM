/* eslint-disable no-unused-vars */
import React from "react";
import style from "./ContactUs.module.css";
import location from "../../assets/location.png";
import call from "../../assets/Calling.png";
import message from "../../assets/Message.png";
import whats from "../../assets/logos_whatsapp-icon.svg";
import calender from "../../assets/lucide_calendar-days.svg";
import clock from "../../assets/tabler_clock-hour-10.svg";
import flag from "../../assets/emojione_flag-for-egypt.svg";
import { useFormik } from "formik";
import { Text } from "../../containers/Languages";


function Contact() {
    const handleSubmit = async () => {
        console.log("Hello");
        //api dependent
    };

    const formik = useFormik({
        initialValues: {
            //api dependent
            fname: "", //api dependent
            sname: "", //api dependent
            phone: "",
            email: "",
        },
        onSubmit: (values) => handleSubmit(values),
    });
    return (
        <div className="container-fluid py-4 mb-5 ">
            <div className="container py-5" id="contactUs">
                <div className="d-flex flex-column gap-2 align-content-center justify-content-center mb-5">
                    <div className={`text-center  fw-bold fs-1`}>
                        <span className="red-word">
                            <Text tid="Contact.title.black" />
                        </span>
                        <Text tid="Contact.title.red" />
                    </div>
                    <div className="text-center text-muted fs-5">
                        <Text tid="Contact.detail-title" />
                    </div>
                </div>
                <div className="container ">
                    <div className="d-flex flex-column flex-lg-row gap-lg-5 gap-md-3 gap-3 ">

                        {/* info */}
                        <div className={`col gap-3 p-3 ${style.box}`}>

                            {/* google maps */}
                            <div className="d-flex flex-row gap-3 mb-4 flx align-content-center align-items-center ">
                                <div 
                                    className={`img-contain p-1 bg-danger rounded-circle d-flex flx-column align-content-center ${style.icon}`}>
                                    <img src={location} alt="location" />
                                </div>
                                <div className="fs-6" style={{width:'70%'}}>
                                    <Text tid="Contact.map"/>
                                    <a href="https://maps.app.goo.gl/MyoSef6e6njKo5sV6" target="_blank"
                                     style={{color:"var(--red-color)",textDecoration:"underline"}}>
                                        <Text tid="Contact.map-direction"/>
                                    </a>
                                </div>
                            </div>

                            {/* phone number */}
                            <div className="d-flex flex-row gap-3 mb-4 flx align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1 bg-danger rounded-circle d-flex flx-column align-content-center ${style.icon}`}
                                >
                                    <img src={call} alt="location" />
                                </div>

                                <div className="fs-6 ltr">
                                    <Text tid="Contact.phone" />
                                </div>
                            </div>

                            {/* mail */}
                            <div className="d-flex flex-row gap-3 mb-4 flx align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1 bg-danger rounded-circle d-flex flx-column align-content-center ${style.icon}`}
                                >
                                    <img src={message} alt="location" />
                                </div>
                                <div className="fs-6">
                                    <a href="mailto:myourmiracle@gmail.com" target="_blank"
                                     className={style.mail} >myourmiracle@gmail.com</a>
                                </div>
                            </div>

                            {/* whatsapp */}
                            <div className="d-flex flex-row gap-3 mb-4 flx align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1  rounded-circle d-flex flx-column align-content-center ${style.icon} ${style.whats}`}
                                >
                                    <img src={whats} alt="location" />
                                </div>
                                <div className="fs-6">
                                  <a href="https://wa.me/+201126765371" target="_blank" className={style.whatsBtn}><Text tid="Contact.message" /></a>  
                               
                                </div>
                            </div>

                            {/* working days */}
                            <div className="d-flex flex-row gap-3 mb-4 align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1 bg-danger rounded-circle d-flex flx-column align-content-center ${style.icon}`}
                                >
                                    <img src={calender} alt="location" />
                                </div>
                                <div className="fs-6">
                                    <Text tid="Contact.days" />
                                </div>
                            </div>


                            {/* working hour */}
                            <div className="d-flex flex-row gap-3 mb-4 align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1 bg-danger rounded-circle d-flex flx-column align-content-center ${style.icon}`}
                                >
                                    <img src={clock} alt="location" />
                                </div>
                                <div className="fs-6">
                                    <Text tid="Contact.hours" />
                                </div>
                            </div>

                                {/* address */}
                            <div className="d-flex flex-row gap-3 mb-4 align-content-center align-items-center ">
                                <div
                                    className={`img-contain p-1  rounded-circle d-flex flx-column align-content-center ${style.flag}`}
                                >
                                    <img src={flag} alt="location" />
                                </div>
                                <div className="fs-6">
                                    <Text tid="Contact.location" />
                                </div>
                            </div>

                        </div>

                        {/* form handling */}

                        <div className={`p-3  col-lg-7 col-md-12 ${style.box}`}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="d-flex flex-column flex-lg-row  gap-2 ">
                                    <div className="d-flex flex-column gap-2 col-lg-6 col-md-12">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            <Text tid="Contact.first" />
                                        </label>
                                        <input
                                            type="text"
                                            name="fname"
                                            value={formik.values.fname}
                                            onChange={formik.handleChange}
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-lg-6 col-md-12">
                                        <label
                                            htmlFor="exampleInputEmail2"
                                            className="form-label"
                                        >
                                            <Text tid="Contact.last" />
                                        </label>
                                        <input
                                            type="text"
                                            name="sname"
                                            value={formik.values.sname}
                                            onChange={formik.handleChange}
                                            className="form-control"
                                            id="exampleInputEmail2"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="d-flex flex-column flex-lg-row mt-3 gap-2 w-100 justify-content-between">
                                    <div className="d-flex flex-column gap-2 col-lg-6 col-md-12">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            <Text tid="Contact.Email" />
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control "
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="d-flex flex-column gap-2 col-lg-6 col-md-12">
                                        <label
                                            htmlFor="exampleInputEmail2"
                                            className="form-label"
                                        >
                                            <Text tid="Contact.Phone" />
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            id="exampleInputEmail2"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-between mt-3 gap-1">
                                    <label
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        <Text tid="Contact.msg" />
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div className="ms-auto text-end">
                                    <button
                                        className="mt-3 red-btn text-white"
                                        type="submit"
                                    >
                                        <Text tid="Contact.send" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
