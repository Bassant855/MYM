/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { LanguageContext, Text } from "../../containers/Languages";
import { Container, Pagination } from "react-bootstrap";
import { ProjectContext } from "../../containers/Projects";
import ReactPaginate from "react-paginate";
import face from '../../assets/face.png'
import linked from "../../assets/ln.svg";
import behance from "../../assets/be.svg";
import github from "../../assets/github.svg";
const baseUrl = "https://mircle51-001-site1.gtempurl.com";

const Projects = () => {
  const {
    projectsList,
    currentPage,
    setCurrentPage,
    setProjectsList,
    DUMMY_DATA,
  } = useContext(ProjectContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProData = async () => {
      const res = await fetch(`${baseUrl}/Projects`);
      const data = await res.json();
      setProjectsList(data);
    };

    getProData();
    console.log(projectsList);
    // setLoading(true);
    // setProjectsList(DUMMY_DATA);
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
          .filter((item) => item.section === btnCategory)
          .slice(startIndex, endIndex)
      );
    }
  }, [btnCategory, currentPage, projectsList]);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const { userLanguage } = useContext(LanguageContext);

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
      : projectsList.filter((item) => item.category === btnCategory).length /
          perPage
  );
  return (
    <Container>
      <section className={classes["projects-projects"]}>
        <div className={`${classes["projects-projects__content"]} container`}>
          <h2
            className={`${classes["projects-projects__title"]}`}
            style={{ fontWeight: "bold", fontSize: "2.5rem" }}
          >
            <Text tid={"Projects.title.black-text"} />
            <span className={`${classes["projects-projects__title--red"]}`}>
              <Text tid={"Projects.title.red-text"} />
            </span>
          </h2>

          <p className={`${classes["projects-projects__text"]}`}>
            <Text tid="Projects.text" />
          </p>

          <div className={`${classes["projects-projects__categories"]} 
          d-flex flex-column flex-lg-row align-items-center border border-1 rounded-3 justify-content-between mb-3`}>
            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "all"
                  ? classes["projects-projects__category--active"]
                  : ""
              }
              rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
              onClick={btnCategoryHandler}
              data-filter="all"
            >
              <Text tid="Projects.categories.category_1" />
            </button>

            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "Designer"
                  ? classes["projects-projects__category--active"]
                  : ""
              } rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch
              `}
              onClick={btnCategoryHandler}
              data-filter="Designer"
            >
              <Text tid="Projects.categories.category_2" />
            </button>

            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "Mobile Development"
                  ? classes["projects-projects__category--active"]
                  : ""
              }
              rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
              onClick={btnCategoryHandler}
              data-filter="Mobile Development"
            >
              <Text tid="Projects.categories.category_3" />
            </button>

            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "Web Development"
                  ? classes["projects-projects__category--active"]
                  : ""
              }
              rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
              onClick={btnCategoryHandler}
              data-filter="Web Development"
            >
              <Text tid="Projects.categories.category_4" />
            </button>

            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "non-tech"
                  ? classes["projects-projects__category--active"]
                  : ""
              }
              rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
              onClick={btnCategoryHandler}
              data-filter="non-tech"
            >
              <Text tid="Projects.categories.category_5" />
            </button>

            <button
              className={`${classes["projects-projects__category"]} ${
                btnCategory === "Others"
                  ? classes["projects-projects__category--active"]
                  : ""
              }
              rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
              onClick={btnCategoryHandler}
              data-filter="Others"
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
                    <div key={job.id} className="col-lg-3 col-sm-12 pb-5">
                      <div className={`box pb-5 position-relative`}>
                        <img
                          className="img-fluid pb-5"
                          src={job.picture}
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
                            {userLanguage === "ar" && job.name_ar ? job.name_ar : job.name}
                          </p>
                          <p className="py-1 fs-6" style={{color:'gray'}}>
                            {job.track}
                          </p>

                          <div
                            className={`icons d-flex align-items-center justify-content-center gap-3`}
                          >

                            {
                            job.facebook && (
                                <a
                                    href={job.facebook}
                                    target="_blank"
                                    className={`icon border border-1 rounded-circle p-2`}
                                    style={{
                                    border: "1px solid black",
                                    }}
                                    role="button"
                                >
                                    <img
                                    className="
                                        img-fluid"
                                    src={face}
                                    alt=""
                                    />
                                </a>
                                )
                            }
                            {
                            job.linkedIn && (
                                <a
                                    href={job.linkedIn}
                                    target="_blank"
                                    className={`icon border border-1 rounded-circle p-2`}
                                    style={{
                                    border: "1px solid black",
                                    }}
                                    role="button"
                                >
                                    <img
                                    className="
                                        img-fluid"
                                    src={linked}
                                    alt=""
                                    />
                                </a>
                                )
                            }
                             {
                            job.behance && (
                                <a
                                    href={job.behance}
                                    target="_blank"
                                    className={`icon border border-1 rounded-circle p-2`}
                                    style={{
                                    border: "1px solid black",
                                    }}
                                    role="button"
                                >
                                    <img
                                    className="
                                        img-fluid"
                                    src={behance}
                                    alt=""
                                    />
                                </a>
                                )
                            }
                             {
                            job.gitHub && (
                                <a
                                    href={job.gitHub}
                                    target="_blank"
                                    className={`icon border border-1 rounded-circle p-2`}
                                    style={{
                                    border: "1px solid black",
                                    }}
                                    role="button"
                                >
                                    <img
                                    className="
                                        img-fluid"
                                    src={github}
                                    alt=""
                                    />
                                </a>
                                )
                            }
                            
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {list.length === 0 && (
              <h3 className={`${classes["projects-projects__list--empty"]}`}>
                <Text tid="Projects.emptyMsg" />
              </h3>
            )}
          </div>
        </div>
      </section>
      {pageCount > 1 && (
        <ReactPaginate
          className={`pagination d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}
          previousLabel={
            <div className={`${classes["pagination-button"]} border border-1 rounded-1 `}>{"<"}</div>
          }
          activeLinkClassName={`${classes["pagination-button-active"]} d-block `}
          nextLabel={
            <div className={`${classes["pagination-button"]} border border-1 rounded-1`}>{">"}</div>
          }
          breakLabel={"..."}
          forcePage={currentPage}
          pageCount={Math.ceil(
            btnCategory === "all"
              ? projectsList.length / perPage
              : projectsList.filter((item) => item.category === btnCategory)
                  .length / perPage
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          previousLinkClassName={`text-black d-block `}
          nextLinkClassName={`text-black d-block `}
          //  containerClassName={'pagination'}
          activeClassName={`${classes["pagination-button-active"]} `}
          pageClassName={`${classes["pagination-button"]} border border-1 rounded-1`}
          pageLinkClassName="d-block "
        />
      )}
    </Container>
  );
};

export default Projects;
