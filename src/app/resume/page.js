import Navbar from "@/components/navbar";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
const Page = () => {
  return (
    <>
      <Navbar page="Resume" />
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaGraduationCap />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Surendra Group of Institutions
              </h4>

              <span>July 2020 — July 2024</span>

              <p className="timeline-text">
                B.tech Computer Science <br />
                CGPA: 7.73
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaCode />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">E Software Solution</h4>

              <span>Jan 2025 — Present</span>

              <p className="timeline-text">
              Designed and developed responsive dashboards for Cyber Security analytics, improving data visualization and user
              experience.
              Developed a clean and structured UI for an Asset Management System, ensuring seamless inventory tracking.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Sukrut Associates</h4>

              <span>June 2024 — December</span>

              <p className="timeline-text">
                Developed a Retailer and Wholesaler E-commerce Panel, focusing
                on intuitive interfaces for inventory management, sales
                tracking, and customer engagement. Contributed to a Cloud-Based
                Bug Detection Project, integrating AWS, Google Cloud, and Azure
                for efficient issue tracking and resolution.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Urban-Chat</h4>

              <span>August 2023 — May 2024</span>

              <p className="timeline-text">
                Designed the interface for an advanced AI chat and support
                system, smoothly blending it into websites and mobile apps like
                Slack and WhatsApp. Worked closely with the development team to
                turn design ideas into a fully functional and responsive
                website.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title"> Apna Konnect</h4>

              <span>Jan 2023 — July 2023</span>

              <p className="timeline-text">
                Lead the development of UI/UX design for mobile applications and
                websites, creating user experience and visual impact. Directed
                high-quality video content for the company’s YouTube channel.
                Conducted user research, usability testing, and stayed updated
                on industry trends for innovative design solutions.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web development</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Design</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: " 50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default Page;
