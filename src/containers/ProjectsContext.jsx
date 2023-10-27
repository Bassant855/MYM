/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext, useEffect } from "react";
// import icon3 from "../assets/be.svg";
// import icon4 from "../assets/github.svg";
// import ln from "../assets/ln.svg";
// import img from "../assets/Image.png";
import axios from 'axios'
// Define your initial data (replace this with your actual data)

// Create the context
export const ProjectContext = createContext();
export const ProjectProvider = ({ children }) => {
    const baseUrl = "https://mircle51-001-site1.gtempurl.com"
    
    const [projects, setProjects] = useState([])
    async function getProjects() {
        try {
            const { data } = await axios.get(`${baseUrl}/Projects`);
            setProjects(data);
            setProjectsList(data); // Update projectsList with the fetched data
        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    }
    
    useEffect(() => {
        getProjects();
    }, []);
    
    
    const [projectsList, setProjectsList] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(8);

    useEffect(() => {
        // setLoading(true);

        setProjectsList(projects);
        // setLoading(false);
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsList.slice(
        indexOfFirstProject,
        indexOfLastProject
    );
    // const pageNumbers = [];
    // for(let i=1; i<Math.ceil(projectsList.length /projectsPerPage ); i++){
    //   pageNumbers.push(i);
    // }
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const contextValue = {
        projectsList,
        // loading,
        currentPage,
        setCurrentPage,
        projectsPerPage,
        currentProjects,
      
        paginate,
    };

    return (
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    );
};
