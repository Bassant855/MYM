/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { LanguageContext, Text } from "../../containers/Languages";
import { Container,Pagination } from "react-bootstrap";
import img from "../../assets/Image.png";
import { ProjectContext } from "../../containers/Projects";
import ReactPaginate from "react-paginate";


const Projects = () => {
    const {
        projectsList,
        currentPage,
        setCurrentPage,
        setProjectsList,
        DUMMY_DATA,
    } = useContext(ProjectContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // setLoading(true);
        setProjectsList(DUMMY_DATA);
        // setLoading(false);
    }, [setProjectsList]);
    const [btnCategory, setBtnCategory] = useState("all");
    const perPage = 8;
    useEffect(() => {
        const startIndex = currentPage * perPage;
        const endIndex = startIndex + perPage;
        if (btnCategory === "all") {
            setList(projectsList.slice(startIndex, endIndex));
        } else {
            setList(
                projectsList
                    .filter((item) => item.category === btnCategory)
                    .slice(startIndex, endIndex)
            );
        }
    }, [btnCategory, currentPage, projectsList]);
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const { userLanguage } = useContext(LanguageContext);

    const [list, setList] = useState([]);

    const btnCategoryHandler = (e) => {
        setBtnCategory(e.target.dataset.filter);
        setCurrentPage(0);
    };

    // if(loading){
    //     return <h2>Loading...</h2>
    // }
    const pageCount = Math.ceil(
        btnCategory === "all"
            ? projectsList.length / perPage
            : projectsList.filter((item) => item.category === btnCategory)
                  .length / perPage
    );
    return (
        <Container>
            <section className={classes["projects-projects"]}>
                <div
                    className={`${classes["projects-projects__content"]} container`}
                >
                    <h2 className={`${classes["projects-projects__title"]}`}  style={{fontWeight:'bold', fontSize:'2.5rem'}}>
                        <Text tid={"Projects.title.black-text"} />
                        <span
                            className={`${classes["projects-projects__title--red"]}`}
                        >
                            <Text tid={"Projects.title.red-text"} />
                        </span>
                    </h2>

                    <p className={`${classes["projects-projects__text"]}`}>
                        <Text tid="Projects.text" />
                    </p>

                    <div
                        className={`${classes["projects-projects__categories"]}`}
                    >
                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "all"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="all"
                        >
                            <Text tid="Projects.categories.category_1" />
                        </button>

                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "ui"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="ui"
                        >
                            <Text tid="Projects.categories.category_2" />
                        </button>

                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "mobile"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="mobile"
                        >
                            <Text tid="Projects.categories.category_3" />
                        </button>

                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "web"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="web"
                        >
                            <Text tid="Projects.categories.category_4" />
                        </button>

                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "non-tech"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="non-tech"
                        >
                            <Text tid="Projects.categories.category_5" />
                        </button>

                        <button
                            className={`${
                                classes["projects-projects__category"]
                            } ${
                                btnCategory === "other"
                                    ? classes[
                                          "projects-projects__category--active"
                                      ]
                                    : ""
                            }`}
                            onClick={btnCategoryHandler}
                            data-filter="other"
                        >
                            <Text tid="Projects.categories.category_6" />
                        </button>
                    </div>

                    <div
                        className={`${classes["projects-projects__list"]} job-list-container`}
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
                                                        width: "80%",
                                                    }}
                                                >
                                                    <p className="fw-medium fs-5">
                                                        {userLanguage === "en"
                                                            ? job.nameEn
                                                            : job.nameAr}
                                                    </p>

                                                    <div
                                                        className={`icons d-flex align-items-center justify-content-center gap-3`}
                                                    >
                                                        {job.links.map(
                                                            (link) => {
                                                                return (
                                                                    <a
                                                                        href={
                                                                            link.link
                                                                        }
                                                                        key={
                                                                            Date.now().toString(
                                                                                36
                                                                            ) +
                                                                            Math.random()
                                                                                .toString(
                                                                                    36
                                                                                )
                                                                                .substr(
                                                                                    2
                                                                                )
                                                                        }
                                                                        className={`icon border border-1 rounded-circle p-2`}
                                                                        style={{
                                                                            border: "1px solid black",
                                                                        }}
                                                                        role="button"
                                                                    >
                                                                        <img
                                                                            className="
                                        img-fluid"
                                                                            src={
                                                                                link.image
                                                                            }
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {list.length === 0 && (
                            <h3
                                className={`${classes["projects-projects__list--empty"]}`}
                            >
                                <Text tid="Projects.emptyMsg" />
                            </h3>
                        )}
                    </div>
                </div>
            </section>
            {pageCount > 1 && (
                
                <ReactPaginate
                    className={`pagination d-flex gap-2 justify-content-center  pb-5 mt-3`}
                    previousLabel={
                        <div className={`${classes["pagination-button"]}`}>
                            {"<"}
                        </div>
                    }
                    activeLinkClassName={`${classes["pagination-button-active"]}`}
                    nextLabel={
                        <div className={`${classes["pagination-button"]}`}>
                            {">"}
                        </div>
                    }
                    breakLabel={"..."}
                    forcePage={currentPage}
                    pageCount={Math.ceil(
                        btnCategory === "all"
                            ? projectsList.length / perPage
                            : projectsList.filter(
                                  (item) => item.category === btnCategory
                              ).length / perPage
                    )}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    //  containerClassName={'pagination'}
                    activeClassName={`${classes["pagination-button-active"]}`}
                    pageClassName={`${classes["pagination-button"]}`}
                />
            )}

      
        </Container>
    );
};

export default Projects;
