/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import classes from "./Projects.module.css";
import { LanguageContext, Text } from "../../containers/Languages";
import img from "../../assets/Image.png";
import { Container, Image,  TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Pagination from "./Pagination";
import { ProjectContext } from "../../containers/Projects";
import ReactPaginate from 'react-paginate';


const Projects = () => {
       const [windowWidth, setWindowWidth] = useState(9)
    useEffect(()=>{
        const size= ()=>{
            if(window.innerWidth<830){
                setWindowWidth(2)
            }
            else if(window.innerWidth<992){
                setWindowWidth(4)
            }
            else if(window.innerWidth<1200){
                setWindowWidth(6)
            }
            else if(window.innerWidth<1600){
                setWindowWidth(9)
            }
        };
        size();
        window.addEventListener('resize',()=>{
            size();
        });
    },[windowWidth]);

    const { projectsList, currentPage, setCurrentPage} = useContext(ProjectContext)
    const [btnCategory, setBtnCategory] = useState("all");
const perPage = 8; 
useEffect(() => {
  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  if (btnCategory === 'all') {
      setList(projectsList.slice(startIndex, endIndex));
  } else {
      setList(
          projectsList
              .filter((item) => item.category === btnCategory)
              .slice(startIndex, endIndex)
      );
  }
}, [btnCategory, currentPage]);
const handlePageChange = (selectedPage) => {
  setCurrentPage(selectedPage.selected);
 
};

    const { userLanguage } = useContext(LanguageContext);
    
    const [list, setList] = useState([]);
    
    const btnCategoryHandler = (e) => {
        setBtnCategory(e.target.dataset.filter);
        setCurrentPage(0)
    };
    
   
    // if(loading){
    //     return <h2>Loading...</h2>
    // }
    const pageCount = Math.ceil(
      btnCategory === 'all'
        ? projectsList.length / perPage
        : projectsList.filter((item) => item.category === btnCategory).length / perPage
    );
    return (
        <Container>
      <section className={classes["projects-projects"]} id="projects">
        <div className={`${classes["projects-projects__content"]} container`}>
        <div className="heading">
            <h1 className="fw-bold"><Text tid="Projects.title.black-text" /> <span className="red-word"><Text tid="Projects.title.red-text" /></span></h1>
            <p className={`${classes.grey} fw-medium pt-2`}><Text tid="Projects.subtitle" /></p>
        </div>

          <ul         className={`${classes.categories} ${classes.grey} d-flex flex-column flex-lg-row align-items-center border border-1 rounded-3 justify-content-between m-5 gap-1`}
>

{/* <li
        role="button" onClick={btnCategoryHandler}>anycategory</li> */}

       
            <li
             className={`${btnCategory === "all"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 
             role="button"
             onClick={btnCategoryHandler}
              data-filter="all" >
              <Text tid="Projects.categories.category_1" />
            </li>

            <li
                          className={`${btnCategory === "ui"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 
                          role="button"
              onClick={btnCategoryHandler}
              data-filter="ui"
            >
              <Text tid="Projects.categories.category_2" />
            </li>

            <li
                           className={`${btnCategory === "mobile"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 
                           role="button"
              onClick={btnCategoryHandler}
              data-filter="mobile"
            >
              <Text tid="Projects.categories.category_3" />
            </li>

            <li
             role="button"
                          className={`${btnCategory === "web"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 

              onClick={btnCategoryHandler}
              data-filter="web"
            >
              <Text tid="Projects.categories.category_4" />
            </li>

            <li
             role="button"
                           className={`${btnCategory === "non-tech"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 

              onClick={btnCategoryHandler}
              data-filter="non-tech"
            >
              <Text tid="Projects.categories.category_5" />
            </li>

            <li
             role="button"
                          className={`${btnCategory === "other"?classes.active:""} rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`} 

              onClick={btnCategoryHandler}
              data-filter="other"
            >
              <Text tid="Projects.categories.category_6" />
            </li>
          </ul>

          <div className={`${classes["projects-projects__list"]} projects-list-container`}>
            <div className={`Employee`}>
              <div className="row gy-2">
                {list.length > 0 &&
                  list.map((proj) => (
                    
                    <div key={proj.id} className="col-lg-3 col-sm-12 pb-5">
                      <div className={`box pb-5 position-relative`}>
                        <img
                          className="img-fluid pb-5"
                          src={img}
                          alt={proj.name}
                        />
                        <div
                          className={`text card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}
                          style={{ marginTop: "-2cm", zIndex: 1,
    "width": "80%"}}
                        >
                          <p className="fw-medium fs-5">
                            {userLanguage === "en"
                              ? proj.nameEn
                              : proj.nameAr}
                          </p>
                         
                          <div className={`icons d-flex align-items-center justify-content-center gap-3`}>
                            {proj.links.map(link=>{
                                return(
                                    <Link to={link.link} key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                    className={`icon border border-1 rounded-circle p-2`} style={{"border": "1px solid black"}}
role="button">
                                        <img className="
                                        img-fluid" src={link.image} alt="" />
                                    </Link>
                                )
                            })}
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
                    nextLabel=
                            ">"
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
                  
                    onPageChange={handlePageChange}
              
                    activeClassName={classes["pagination-button-active"]}
            pageRangeDisplayed={windowWidth}
            previousLabel="<"

renderOnZeroPageCount={null}

className= {`${classes.pagination} d-flex gap-2 justify-content-center align-items-center pb-5 mt-3`}

activeLinkClassName={`${classes.active} d-block px-3 py-2 {classes.grey}`}


pageLinkClassName= {`d-block px-3 py-2 ${classes.grey}`}

pageClassName={`border border-1 rounded-1`}
            previousClassName="border border-1 rounded-1"
            previousLinkClassName={`text-black d-block px-3 py-2`}
            nextClassName={`border border-1 rounded-1`}
            nextLinkClassName={`text-black d-block px-3 py-2`}
            disabledLinkClassName={`${classes.disabled}`}
            breakClassName={`${classes.break}`}
                />
            )}

    </Container>
  );
};

export default Projects;
