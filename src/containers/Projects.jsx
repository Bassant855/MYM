/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext, useEffect } from "react";
import icon3 from "../assets/be.svg";
import icon4 from '../assets/github.svg';
import ln from  '../assets/ln.svg';
import img from "../assets/image.png";

// Define your initial data (replace this with your actual data)


// Create the context
export const ProjectContext = createContext();
export const ProjectProvider = ({ children }) => {
  const DUMMY_DATA = [

   
    {
      id: 5,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "web",
      imgSrc: { img },
      links:[
        {image:icon3, link:"ww.behance.com"},
        {image:icon4, link:"www.github.com"},
        {image:ln, link:"www.linkedin.com"}
    ],
      title:{
          english:"Backend Developer",
          arabic:"مطور الواجهات الخلفية"
      },  }, {
        id: 1,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "ui",
        title:{
            english:"Frontend Developer",
            arabic:"مطور الواجهات الأمامية"
        },
        links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
        imgSrc: { img },
      },
      {
        id: 2,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        title:{
            english:"Frontend Developer",
            arabic:"مطور الواجهات الأمامية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 3,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
      
         title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 4,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 5,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
        title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },  }, {
          id: 1,
          nameAr: "اسم المشروع",
          nameEn: "Projest's Name",
          category: "ui",
          title:{
              english:"Frontend Developer",
              arabic:"مطور الواجهات الأمامية"
          },
          links:[
              {image:icon3, link:"ww.behance.com"},
              {image:icon4, link:"www.github.com"},
              {image:ln, link:"www.linkedin.com"}
          ],
          imgSrc: { img },
        },
        {
          id: 2,
          nameAr: "اسم المشروع",
          nameEn: "Projest's Name",
          category: "web",
          imgSrc: { img },
          title:{
              english:"Frontend Developer",
              arabic:"مطور الواجهات الأمامية"
          },
          links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
        },
        {
          id: 3,
          nameAr: "اسم المشروع",
          nameEn: "Projest's Name",
          category: "web",
          imgSrc: { img },
        
           title:{
              english:"Backend Developer",
              arabic:"مطور الواجهات الخلفية"
          },
          links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
        },
        {
          id: 4,
          nameAr: "اسم المشروع",
          nameEn: "Projest's Name",
          category: "web",
          imgSrc: { img },
          title:{
              english:"Backend Developer",
              arabic:"مطور الواجهات الخلفية"
          },
          links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
        },
        {
          id: 5,
          nameAr: "اسم المشروع",
          nameEn: "Projest's Name",
          category: "web",
          imgSrc: { img },
          links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
          title:{
              english:"Backend Developer",
              arabic:"مطور الواجهات الخلفية"
          },  }, {
            id: 1,
            nameAr: "اسم المشروع",
            nameEn: "Projest's Name",
            category: "ui",
            title:{
                english:"Frontend Developer",
                arabic:"مطور الواجهات الأمامية"
            },
            links:[
                {image:icon3, link:"ww.behance.com"},
                {image:icon4, link:"www.github.com"},
                {image:ln, link:"www.linkedin.com"}
            ],
            imgSrc: { img },
          },
          {
            id: 2,
            nameAr: "اسم المشروع",
            nameEn: "Projest's Name",
            category: "web",
            imgSrc: { img },
            title:{
                english:"Frontend Developer",
                arabic:"مطور الواجهات الأمامية"
            },
            links:[
              {image:icon3, link:"ww.behance.com"},
              {image:icon4, link:"www.github.com"},
              {image:ln, link:"www.linkedin.com"}
          ],
          },
          {
            id: 3,
            nameAr: "اسم المشروع",
            nameEn: "Projest's Name",
            category: "web",
            imgSrc: { img },
          
             title:{
                english:"Backend Developer",
                arabic:"مطور الواجهات الخلفية"
            },
            links:[
              {image:icon3, link:"ww.behance.com"},
              {image:icon4, link:"www.github.com"},
              {image:ln, link:"www.linkedin.com"}
          ],
          },
          {
            id: 4,
            nameAr: "اسم المشروع",
            nameEn: "Projest's Name",
            category: "web",
            imgSrc: { img },
            title:{
                english:"Backend Developer",
                arabic:"مطور الواجهات الخلفية"
            },
            links:[
              {image:icon3, link:"ww.behance.com"},
              {image:icon4, link:"www.github.com"},
              {image:ln, link:"www.linkedin.com"}
          ],
          },
          {
            id: 5,
            nameAr: "اسم المشروع",
            nameEn: "Projest's Name",
            category: "web",
            imgSrc: { img },
            links:[
              {image:icon3, link:"ww.behance.com"},
              {image:icon4, link:"www.github.com"},
              {image:ln, link:"www.linkedin.com"}
          ],
            title:{
                english:"Backend Developer",
                arabic:"مطور الواجهات الخلفية"
            },  }, {
              id: 1,
              nameAr: "اسم المشروع",
              nameEn: "Projest's Name",
              category: "ui",
              title:{
                  english:"Frontend Developer",
                  arabic:"مطور الواجهات الأمامية"
              },
              links:[
                  {image:icon3, link:"ww.behance.com"},
                  {image:icon4, link:"www.github.com"},
                  {image:ln, link:"www.linkedin.com"}
              ],
              imgSrc: { img },
            },
            {
              id: 2,
              nameAr: "اسم المشروع",
              nameEn: "Projest's Name",
              category: "web",
              imgSrc: { img },
              title:{
                  english:"Frontend Developer",
                  arabic:"مطور الواجهات الأمامية"
              },
              links:[
                {image:icon3, link:"ww.behance.com"},
                {image:icon4, link:"www.github.com"},
                {image:ln, link:"www.linkedin.com"}
            ],
            },
            {
              id: 3,
              nameAr: "اسم المشروع",
              nameEn: "Projest's Name",
              category: "web",
              imgSrc: { img },
            
               title:{
                  english:"Backend Developer",
                  arabic:"مطور الواجهات الخلفية"
              },
              links:[
                {image:icon3, link:"ww.behance.com"},
                {image:icon4, link:"www.github.com"},
                {image:ln, link:"www.linkedin.com"}
            ],
            },
            {
              id: 4,
              nameAr: "اسم المشروع",
              nameEn: "Projest's Name",
              category: "web",
              imgSrc: { img },
              title:{
                  english:"Backend Developer",
                  arabic:"مطور الواجهات الخلفية"
              },
              links:[
                {image:icon3, link:"ww.behance.com"},
                {image:icon4, link:"www.github.com"},
                {image:ln, link:"www.linkedin.com"}
            ],
            },
            {
              id: 5,
              nameAr: "اسم المشروع",
              nameEn: "Projest's Name",
              category: "web",
              imgSrc: { img },
              links:[
                {image:icon3, link:"ww.behance.com"},
                {image:icon4, link:"www.github.com"},
                {image:ln, link:"www.linkedin.com"}
            ],
              title:{
                  english:"Backend Developer",
                  arabic:"مطور الواجهات الخلفية"
              },  }, {
                id: 1,
                nameAr: "اسم المشروع",
                nameEn: "Projest's Name",
                category: "ui",
                title:{
                    english:"Frontend Developer",
                    arabic:"مطور الواجهات الأمامية"
                },
                links:[
                    {image:icon3, link:"ww.behance.com"},
                    {image:icon4, link:"www.github.com"},
                    {image:ln, link:"www.linkedin.com"}
                ],
                imgSrc: { img },
              },
              {
                id: 2,
                nameAr: "اسم المشروع",
                nameEn: "Projest's Name",
                category: "web",
                imgSrc: { img },
                title:{
                    english:"Frontend Developer",
                    arabic:"مطور الواجهات الأمامية"
                },
                links:[
                  {image:icon3, link:"ww.behance.com"},
                  {image:icon4, link:"www.github.com"},
                  {image:ln, link:"www.linkedin.com"}
              ],
              },
              {
                id: 3,
                nameAr: "اسم المشروع",
                nameEn: "Projest's Name",
                category: "web",
                imgSrc: { img },
              
                 title:{
                    english:"Backend Developer",
                    arabic:"مطور الواجهات الخلفية"
                },
                links:[
                  {image:icon3, link:"ww.behance.com"},
                  {image:icon4, link:"www.github.com"},
                  {image:ln, link:"www.linkedin.com"}
              ],
              },
              {
                id: 4,
                nameAr: "اسم المشروع",
                nameEn: "Projest's Name",
                category: "web",
                imgSrc: { img },
                title:{
                    english:"Backend Developer",
                    arabic:"مطور الواجهات الخلفية"
                },
                links:[
                  {image:icon3, link:"ww.behance.com"},
                  {image:icon4, link:"www.github.com"},
                  {image:ln, link:"www.linkedin.com"}
              ],
              },
              {
                id: 5,
                nameAr: "اسم المشروع",
                nameEn: "Projest's Name",
                category: "web",
                imgSrc: { img },
                links:[
                  {image:icon3, link:"ww.behance.com"},
                  {image:icon4, link:"www.github.com"},
                  {image:ln, link:"www.linkedin.com"}
              ],
                title:{
                    english:"Backend Developer",
                    arabic:"مطور الواجهات الخلفية"
                },  }, {
      id: 1,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "ui",
      title:{
          english:"Frontend Developer",
          arabic:"مطور الواجهات الأمامية"
      },
      links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      imgSrc: { img },
    },
    {
      id: 2,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "web",
      imgSrc: { img },
      title:{
          english:"Frontend Developer",
          arabic:"مطور الواجهات الأمامية"
      },
      links:[
        {image:icon3, link:"ww.behance.com"},
        {image:icon4, link:"www.github.com"},
        {image:ln, link:"www.linkedin.com"}
    ],
    },
    {
      id: 3,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "web",
      imgSrc: { img },
    
       title:{
          english:"Backend Developer",
          arabic:"مطور الواجهات الخلفية"
      },
      links:[
        {image:icon3, link:"ww.behance.com"},
        {image:icon4, link:"www.github.com"},
        {image:ln, link:"www.linkedin.com"}
    ],
    },
    {
      id: 4,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "web",
      imgSrc: { img },
      title:{
          english:"Backend Developer",
          arabic:"مطور الواجهات الخلفية"
      },
      links:[
        {image:icon3, link:"ww.behance.com"},
        {image:icon4, link:"www.github.com"},
        {image:ln, link:"www.linkedin.com"}
    ],
    },
    {
      id: 5,
      nameAr: "اسم المشروع",
      nameEn: "Projest's Name",
      category: "web",
      imgSrc: { img },
      links:[
        {image:icon3, link:"ww.behance.com"},
        {image:icon4, link:"www.github.com"},
        {image:ln, link:"www.linkedin.com"}
    ],
      title:{
          english:"Backend Developer",
          arabic:"مطور الواجهات الخلفية"
      },  }, {
        id: 1,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "ui",
        title:{
            english:"Frontend Developer",
            arabic:"مطور الواجهات الأمامية"
        },
        links:[
            {image:icon3, link:"ww.behance.com"},
            {image:icon4, link:"www.github.com"},
            {image:ln, link:"www.linkedin.com"}
        ],
        imgSrc: { img },
      },
      {
        id: 2,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        title:{
            english:"Frontend Developer",
            arabic:"مطور الواجهات الأمامية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 3,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
      
         title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 4,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
      },
      {
        id: 5,
        nameAr: "اسم المشروع",
        nameEn: "Projest's Name",
        category: "web",
        imgSrc: { img },
        links:[
          {image:icon3, link:"ww.behance.com"},
          {image:icon4, link:"www.github.com"},
          {image:ln, link:"www.linkedin.com"}
      ],
        title:{
            english:"Backend Developer",
            arabic:"مطور الواجهات الخلفية"
        },  },
  ];
  const [projectsList, setProjectsList] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(8);

  useEffect(() => {
    // setLoading(true);

    
      setProjectsList(DUMMY_DATA);
      // setLoading(false);
    }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsList.slice(indexOfFirstProject, indexOfLastProject);
  // const pageNumbers = [];
  // for(let i=1; i<Math.ceil(projectsList.length /projectsPerPage ); i++){
  //   pageNumbers.push(i);
  // }
const paginate = (pageNumber)=> setCurrentPage(pageNumber);
  const contextValue = {
    projectsList,
    // loading,
    currentPage,
    setCurrentPage,
    projectsPerPage,
    currentProjects,
    DUMMY_DATA,
    paginate
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};
