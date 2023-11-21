import { useState } from "react";
import { Text } from "../../containers/Languages";
import { useContext } from "react";
import { TeamContext } from "./store/TeamContext";

const Categories = ({ styles }) => {
  const { handleCategories, data, handlePage } = useContext(TeamContext);

  const [active, setActive] = useState("all");
  const handleClick = (item) => {
    handleCategories(item);
    setActive(item);
    handlePage(1);
  };

  const categories = [
    "all",
    "Managers",
    "Designer",
    "Mobile Development",
    "Web Development",
    "Non Technical",
    "Others",
  ].map((c, index) => {
    return (
      <li
        key={index}
        className={`${
          active == c ? styles.active : ""
        } rounded-3 p-3 m-0 flex-grow-1 d-flex align-items-center justify-content-center align-self-stretch`}
        role="button"
        onClick={() => handleClick(c)}
      >
        <Text tid={"team.categories." + c} />
        {data.cat == active}
      </li>
    );
  });

  return (
    <ul
      className={`${styles.categories} ${styles.grey} d-flex flex-column flex-lg-row align-items-center border border-1 rounded-3 justify-content-between m-5`}
    >
      {categories}
    </ul>
  );
};

export default Categories;
