/* eslint-disable no-unused-vars */
import { useContext, useState ,useEffect} from "react";
import { Text } from "../../containers/Languages";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogCard from "../../components/blogCard";

import classes from "./Blog.module.css";
import { LanguageContext } from "../../containers/Languages";

const baseUrl = "https://mircle51-001-site1.gtempurl.com";


const Blog = () => {
  const [page, setPage] = React.useState(1);
  const [blogs, setBlogs] = useState([])

  const getBlogs =  async() => {
    const res = await fetch(`${baseUrl}/Blogs`);
    const data = await res.json()
    setBlogs(data)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const handleChange = (event, value) => {
    setPage(value);
  };
  const languageContext = useContext(LanguageContext);

  // const blogs = [
  //   {
  //     id: 1,
  //     name: "Blog 1",
  //     name_ar: "المدونة 1",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Blog 2",
  //     name_ar: "المدونة 2",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Blog 3",
  //     name_ar: "المدونة 3",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Blog 1",
  //     name_ar: "المدونة 1",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Blog 5",
  //     name_ar: "المدونة 5",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 6,
  //     name: "Blog 6",
  //     name_ar: "المدونة 6",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 7,
  //     name: "Blog 7",
  //     name_ar: "المدونة 7",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 9,
  //     name: "Blog 9",
  //     name_ar: "المدونة 9",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 10,
  //     name: "Blog 1",
  //     name_ar: "المدونة 1",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 11,
  //     name: "Blog 11",
  //     name_ar: "المدونة 11",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 12,
  //     name: "Blog 12",
  //     name_ar: "المدونة 12",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 13,
  //     name: "Blog 13",
  //     name_ar: "المدونة 13",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 14,
  //     name: "Blog 14",
  //     name_ar: "المدونة 14",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  //   {
  //     id: 15,
  //     name: "Blog 15",
  //     name_ar: "المدونة 15",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     description_ar:
  //       "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب قصف المسرح واستمر الإتحاد في ذات أسيا للغزو ",
  //     date: "2021-01-01",
  //     picture: "https://picsum.photos/200/300",
  //     facebook: "https://www.facebook.com",
  //     linkedin: "https://www.linkedin.com",
  //     instagram: "https://www.instagram.com",
  //     twitter: "https://www.twitter.com",
  //   },
  // ];

  // Calculate the start and end indexes for the current page
  const itemsPerPage = 6;
  const endIndex = page * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  // Slice the blogs array to get the posts for the current page
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

//   const useStyles = makeStyles((theme) =>({
//     root: {
//       '& .Mui-selected': {
//         backgroundColor: 'transparent',
//         color:'#19D5C6',
//        },
// }}),
//   );
//   // .... rest of code
//   const classesMUI = useStyles();

  return (
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
          { blogs.length > 0 && paginatedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              name={blog.name}
              name_ar={blog.name_ar}
              description={blog.description}
              description_ar={blog.description_ar}
              twitter={blog.twitter}
              instagram={blog.instagram}
              facebook={blog.facebook}
              linkedin={blog.linkedin}
              picture={blog.picture}
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
            className={classes.page}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Blog;
