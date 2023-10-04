import React from "react";
import style from "./Certificate.module.css";
import env from "../../assets/env.png";
function Certificate() {
  return (
    <div className={`container-fluid py-5 ${style.bg}`}>
      <div className="container py-3">
        <div className={`mt-1 fs-1 text-center fw-bold`}>
          <span className={`${style.main}`}>MYM </span>Certificate
        </div>
        <div className={`mt-2 fs-5 ${style.font} text-center`}>
          You will be able to find your certificate just enter your ID
        </div>
        <div className="mt-5 d-flex flex-column-reverse py-4 flex-lg-row flex-wrap justify-content-between ">
          <div className="col-lg-7 col-md-10 col-sm-10 mx-md-auto mx-sm-auto">
            <img src={env} alt="env" className="w-100" />
          </div>
          <div
            className={`d-flex mb-5 flex-column col-lg-5 col-md-10 col-sm-11 mx-md-auto mx-sm-auto  px-3`}
          >
            <div className={`fs-4 mb-3 ${style.font} w-100`}>
              Your ID Number
            </div>
            <div className="">
              <input
                type="text"
                placeholder="X0000000000"
                name="fname"
                className={`${style.formControl} form-control`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
