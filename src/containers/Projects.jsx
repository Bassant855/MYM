/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext, useEffect } from "react";
import icon3 from "../assets/be.svg";
import icon4 from "../assets/github.svg";
import ln from "../assets/ln.svg";
import img from "../assets/Image.png";

// Define your initial data (replace this with your actual data)

// Create the context
export const ProjectContext = createContext();
export const ProjectProvider = ({ children }) => {
    const DUMMY_DATA = [
        {
            id: 0,
            nameAr: "اسم المشروع 0",
            nameEn: "Projest's Name 0",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 1,
            nameAr: "اسم المشروع 1",
            nameEn: "Projest's Name 1",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 2,
            nameAr: "اسم المشروع 2",
            nameEn: "Projest's Name 2",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 3,
            nameAr: "اسم المشروع 3",
            nameEn: "Projest's Name 3",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 4,
            nameAr: "اسم المشروع 4",
            nameEn: "Projest's Name 4",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 5,
            nameAr: "اسم المشروع 5",
            nameEn: "Projest's Name 5",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 6,
            nameAr: "اسم المشروع 6",
            nameEn: "Projest's Name 6",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 7,
            nameAr: "اسم المشروع 7",
            nameEn: "Projest's Name 7",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 8,
            nameAr: "اسم المشروع 8",
            nameEn: "Projest's Name 8",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 9,
            nameAr: "اسم المشروع 9",
            nameEn: "Projest's Name 9",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 10,
            nameAr: "اسم المشروع 10",
            nameEn: "Projest's Name 10",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 11,
            nameAr: "اسم المشروع 11",
            nameEn: "Projest's Name 11",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 12,
            nameAr: "اسم المشروع 12",
            nameEn: "Projest's Name 12",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 13,
            nameAr: "اسم المشروع 13",
            nameEn: "Projest's Name 13",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 14,
            nameAr: "اسم المشروع 14",
            nameEn: "Projest's Name 14",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 15,
            nameAr: "اسم المشروع 15",
            nameEn: "Projest's Name 15",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 16,
            nameAr: "اسم المشروع 16",
            nameEn: "Projest's Name 16",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 17,
            nameAr: "اسم المشروع 17",
            nameEn: "Projest's Name 17",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 18,
            nameAr: "اسم المشروع 18",
            nameEn: "Projest's Name 18",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 19,
            nameAr: "اسم المشروع 19",
            nameEn: "Projest's Name 19",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 20,
            nameAr: "اسم المشروع 20",
            nameEn: "Projest's Name 20",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 21,
            nameAr: "اسم المشروع 21",
            nameEn: "Projest's Name 21",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 22,
            nameAr: "اسم المشروع 22",
            nameEn: "Projest's Name 22",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 23,
            nameAr: "اسم المشروع 23",
            nameEn: "Projest's Name 23",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 24,
            nameAr: "اسم المشروع 24",
            nameEn: "Projest's Name 24",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 25,
            nameAr: "اسم المشروع 25",
            nameEn: "Projest's Name 25",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 26,
            nameAr: "اسم المشروع 26",
            nameEn: "Projest's Name 26",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 27,
            nameAr: "اسم المشروع 27",
            nameEn: "Projest's Name 27",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 28,
            nameAr: "اسم المشروع 28",
            nameEn: "Projest's Name 28",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 29,
            nameAr: "اسم المشروع 29",
            nameEn: "Projest's Name 29",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 30,
            nameAr: "اسم المشروع 30",
            nameEn: "Projest's Name 30",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
        {
            id: 31,
            nameAr: "اسم المشروع 31",
            nameEn: "Projest's Name 31",
            category: "ui",
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            imgSrc: { img },
        },
        {
            id: 32,
            nameAr: "اسم المشروع 32",
            nameEn: "Projest's Name 32",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Frontend Developer",
                arabic: "مطور الواجهات الأمامية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 33,
            nameAr: "اسم المشروع 33",
            nameEn: "Projest's Name 33",
            category: "web",
            imgSrc: { img },

            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 34,
            nameAr: "اسم المشروع 34",
            nameEn: "Projest's Name 34",
            category: "web",
            imgSrc: { img },
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
        },
        {
            id: 35,
            nameAr: "اسم المشروع 35",
            nameEn: "Projest's Name 35",
            category: "web",
            imgSrc: { img },
            links: [
                { image: icon3, link: "ww.behance.com" },
                { image: icon4, link: "www.github.com" },
                { image: ln, link: "www.linkedin.com" },
            ],
            title: {
                english: "Backend Developer",
                arabic: "مطور الواجهات الخلفية",
            },
        },
    ];
    const [projectsList, setProjectsList] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(8);

    useEffect(() => {
        // setLoading(true);

        setProjectsList(DUMMY_DATA);
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
        DUMMY_DATA,
        paginate,
    };

    return (
        <ProjectContext.Provider value={contextValue}>
            {children}
        </ProjectContext.Provider>
    );
};
