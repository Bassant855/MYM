/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { LanguageContext, Text } from "../../containers/Languages";
import img from "../../assets/image.png";
import { Container, Image,  TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { ProjectContext } from "../../containers/Projects";


const Projects = () => {
  const {  DUMMY_DATA} = useContext(ProjectContext)
    const { userLanguage } = useContext(LanguageContext);
    
    const [btnCategory, setBtnCategory] = useState("all");
    const [list, setList] = useState([]);
    
    const btnCategoryHandler = (e) => {
        setBtnCategory(e.target.dataset.filter);

    };
    
    useEffect(() => {
        if (btnCategory === "all") {
            setList(displayedProjects);
        } else {
            setList(displayedProjects.filter((item) => item.category === btnCategory));
        }
    }, [btnCategory]);
  //   // if(loading){
  //   //     return <h2>Loading...</h2>
  //   // }
  const [currentPage, setCurrentPage] = useState(0); // Start from page 1
  const projectsPerPage = 8;

  // Calculate the indexes for the current page's projects
  const indexOfLastProject = (currentPage + 1) * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const displayedProjects = DUMMY_DATA.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
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

          <div className={`${classes["JOBS-jobs__list"]} job-list-container`}>
            <div className={`Employee`}>
              <div className="row gy-2">
                {list.length > 0 &&
                  list.map((job) => (
                    <div key={job.id} className="col-lg-3 col-sm-12 pb-5">
                      <div className={`box pb-5 position-relative`}>
                        <img
                          className="img-fluid pb-5"
                          src={img}
                          alt={job.name}
                        />
                        <div
                          className={`text card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}
                          style={{ marginTop: "-2cm", zIndex: 1,
    "width": "80%"}}
                        >
                          <p className="fw-medium fs-5">
                            {userLanguage === "en"
                              ? job.nameEn
                              : job.nameAr}
                          </p>
                          {/* <span className={`grey mb-3`}>
                            {userLanguage === "en"
                              ? job.title.english
                              : job.title.arabic}
                          </span> */}
                          <div className={`icons d-flex align-items-center justify-content-center gap-3`}>
                            {job.links.map(link=>{
                                return(
                                    <Link to={link.link} key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                    className={`icon border border-1 rounded-circle p-2`} style={{"border": "1px solid black"}}
role="button">
                                        <img className="img-fluid" src={link.image} alt="" />
                                    </Link>
                                )
                            })}
                        </div>
                          {/* <div
                            className={`icons d-flex align-items-center justify-content-center gap-3`}
                          ></div> */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {list.length === 0 && (
              <h3 className={`${classes["JOBS-jobs__list--empty"]}`}>
                <Text tid="Projects.emptyMsg" />
              </h3>
            )}
          </div>
        </div>
        {/* <Pagination /> */}
      </section>
    </Container>
  );
};

export default Projects;
