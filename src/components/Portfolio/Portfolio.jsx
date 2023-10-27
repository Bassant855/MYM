
import "./portfolio.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../containers/Languages";


const baseUrl = "https://mircle51-001-site1.gtempurl.com";


const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("All");
  const [cards, setCards] = useState([]);


  const buttonHandler = (e) => {
    setCategory(e.target.dataset.category);
    console.log(projects);
    setCards(
      projects.filter((pro) => {
        return category === "All"
          ? true
          : pro.section === e.target.dataset.category;
      })
    );
  };

  const getProjects = async () => {
    try {
      const response = await fetch(`${baseUrl}/Projects`);
      const data = await response.json();
      if (response.ok) {
        setProjects(data);
        setCards(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="portfolio my-5 py-3 ">
      <div className="container">
        <div className="port-head" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "bold", color: "#fff" }}>
            <Text tid="home-portfolio.port-head" />
            <span
              style={{
                color: "var(--red-color)",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              <Text tid="home-portfolio.port-word" />
            </span>
          </h2>
          <p style={{ color: "var(--grey-color)", fontSize: "18px" }}>
            <Text tid="home-portfolio.port-para" />
          </p>
        </div>

        <div className="port-btns mt-3 mb-5">
          <button
            className={category === "All" ? "active" : "port-btn "}
            onClick={(e) => buttonHandler(e)}
            data-category="All"
          >
            <Text tid="home-portfolio.port-btns.all-port" />
          </button>
          <button
            className={category === "Designers" ? "active" : "port-btn "}
            onClick={(e) => buttonHandler(e)}
            data-category="Designers"
          >
            <Text tid="home-portfolio.port-btns.designers" />
          </button>
          <button
            className={
              category === "Mobile Development" ? "active" : "port-btn "
            }
            onClick={(e) => buttonHandler(e)}
            data-category="Mobile Development"
          >
            <Text tid="home-portfolio.port-btns.mobile" />
          </button>
          <button
            className={category === "Web Development" ? "active" : "port-btn "}
            onClick={(e) => buttonHandler(e)}
            data-category="Web Development"
          >
            <Text tid="home-portfolio.port-btns.web" />
          </button>
          <button
            className={category === "Others" ? "active" : "port-btn "}
            onClick={(e) => buttonHandler(e)}
            data-category="Others"
          >
            <Text tid="home-portfolio.port-btns.other" />
          </button>
        </div>

        <div className="d-flex flex-wrap  gap-3 mb-5 port-container">
          {cards.length > 0 ? (
            cards.slice(0, 8).map((d) => {
              return (
                <div key={d.id} className="port">
                  <div className="hover-port" style={{ width: "100%" }}>
                    <img
                      src={d.picture}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  <Link
                    to='/projects'
                    target="_blank"
                    className="port-hover-btn red-btn"
                  >
                    <Text tid="home-portfolio.port-hover-btn" />
                  </Link>
                </div>
              );
            })
          ) : (
            <h3 style={{ color: "#fff" }}>
              <Text tid="home-portfolio.not-found" />
            </h3>
          )}
        </div>

        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Link
            className="red-btn  "
            to="/projects"
            style={{
              width: "30%",
              minWidth: "fit-content",
              display: "block",
              margin: "auto",
            }}
          >
            <Text tid="home-portfolio.port-btn" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
