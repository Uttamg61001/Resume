"use client";
import Navbar from "@/components/navbar";
import projectsData from "@/data/project";
import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaChevronDown, FaRegEye } from "react-icons/fa";
const Page = () => {
  const [toggle, setToggle] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const [filter, setFilter] = React.useState("all");
  const [filters, setFilters] = React.useState(["all"]);
  useEffect(() => {
    if (filter == "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === filter)
      );
    }
    setFilters(["all", ...new Set(projectsData.map((item) => item.category))]);
  }, [filter]);
  return (
    <>
      <Navbar page="Portfolio" />
      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            {filters.map((item) => (
              <li key={item} className="filter-item">
                <button
                  onClick={() => setFilter(item)}
                  className={filter === item ? "active" : ""}
                  data-filter-btn
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="filter-select-box">
            <button
              className={`filter-select ${toggle && "active"}`}
              data-select
              onClick={() => setToggle(!toggle)}
            >
              <div className="select-value" data-selecct-value>
                Select category
              </div>
              <div className="select-icon">
                <FaChevronDown />
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            {projects?.map((item, key) => {
              return (
                <li
                  key={key}
                  className="project-item active"
                  data-filter-item
                  data-category={item.category}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <FaRegEye />
                      </div>
                      <img src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
                    </figure>
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-category">{item.category}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Page;
