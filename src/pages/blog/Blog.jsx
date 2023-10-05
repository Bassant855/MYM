/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Text } from "../../containers/Languages";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material";
import BlogCard from "../../components/blogCard";
import classes from "./Blog.module.css";
import image from "../../assets/ImageBlog.jpg";
import { LanguageContext } from "../../containers/Languages";
const Blog = () => {
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const languageContext = useContext(LanguageContext);

    const blogs = [
        {
            id: 1,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 2,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 3,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 4,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 5,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 6,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 7,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 8,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 900,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 9,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 10,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 11,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 12,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
        {
            id: 13,
            nameEn: "Produce UI Components",
            nameAr: "إنتاج مكونات واجهة المستخدم",
            date: "7 jul 2023",
            describtionEn:
                "Lorem ipsum dolor sit amet consectetur. Tempus faucibus pellentesque sit amet nisl commodo ullamcorper",
            describtionAr: "هذا نص عشوائي باللغة العربية",
            img: image,
            views: 785,
            likes: 800,
            instagramLink: "https://www.instagram.com/",
            facebookLink: "https://www.instagram.com/",
            linkedInLink: "https://www.instagram.com/",
            xLink: "https://www.instagram.com/",
            isFav: true,
        },
    ];

    // Calculate the start and end indexes for the current page
    const itemsPerPage = 6;
    const endIndex = page * itemsPerPage;
    const startIndex = endIndex - itemsPerPage;

    // Slice the blogs array to get the posts for the current page
    const paginatedBlogs = blogs.slice(startIndex, endIndex);

    const theme = createTheme({
        components: {
            MuiPaginationItem: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            color: "#fff",
                            backgroundColor: "#FF1013",
                        },
                        ":hover": {
                            color: "#fff",
                            backgroundColor: "#FF1013",
                        },
                        "&.Mui-selected:hover": {
                            color: "#fff",
                            backgroundColor: "#FF1013",
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className={`${classes["blog-container"]}`}>
                    <div className={`${classes["header"]}`}>
                        <h4>
                            <Text tid="our-blog.our" />{" "}
                            <span className={`${classes["header-span"]}`}>
                                <Text tid="our-blog.blog" />
                            </span>
                        </h4>
                        <p>
                            <Text tid="our-blog.blog-para" />
                        </p>
                    </div>
                    <div className={`${classes["containers"]}`}>
                        {paginatedBlogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                nameAr={blog.nameAr}
                                nameEn={blog.nameEn}
                                describtionEn={blog.describtionEn}
                                describtionAr={blog.describtionAr}
                                likes={blog.likes}
                                views={blog.views}
                                isFav={blog.isFav}
                                xLink={blog.xLink}
                                instagramLink={blog.instagramLink}
                                facebookLink={blog.facebookLink}
                                linkedInLink={blog.linkedInLink}
                                img={blog.img}
                                date={blog.date}
                            />
                        ))}
                    </div>
                </div>
                <div className={`${classes["pagination"]}`}>
                    <Stack spacing={3}>
                        <Pagination
                            count={Math.ceil(blogs.length / itemsPerPage)}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                            page={page}
                        />
                    </Stack>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Blog;
