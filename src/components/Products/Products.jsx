import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import style from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

function Products() {
  const navigate = useNavigate();
  const getProducts = async () => {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  };

  const { isLoading, isError, data } = useQuery("products", getProducts);
  // console.log(data.data);

  return (
    <div className="container m-auto mt-5">
      {isLoading ? (
        <div className="py-5 my-5 d-flex justify-content-center align-items-center align-content-center ">
          <BallTriangle
            height={200}
            width={200}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div className="row g-3">
          {data?.data.data.map((item, indx) => {
            const { price, imageCover, category, title, id, ratingsAverage } =
              item;
            return (
              <div
                className={`${style.product} mt-3 col-lg-3 col-md-6 col-sm-1  p-4`}
                onClick={() => navigate(`/product/${id}`)}
                key={indx}
              >
                <div className={`d-flex flex-column gap-1 `}>
                  <div className="img-contain">
                    <img src={imageCover} className="w-100" alt="img-cover" />
                  </div>
                  <div className="details d-flex flex-column gap-1">
                    <div className={`fcolor`}>{category.name}</div>
                    <div className={`${style.fsl}`}>
                      {title.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between  mt-1 text-muted">
                    <div className="fs-6 ">{price} EGP</div>
                    <div className="d-flex flex-row gap-2 alig-content-center align-items-center">
                      <i className="fa-solid fa-star star-color"></i>
                      <div className="">{ratingsAverage}</div>
                    </div>
                  </div>
                  <div className="mb-1 d-flex flex-row justify-content-center">
                    <div
                      className={`my-3 py-1 rounded-3 text-center w-75 text-light ${style.butn} `}
                    >
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
