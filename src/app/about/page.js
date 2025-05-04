"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { MovingBorder } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

const About = () => {
  const [isMedia, setIsMedia] = useState(true);

  const services = [
    {
      iconSrc: "/assets/images/icon-design.svg",
      iconAlt: "design icon",
      title: "Web design",
      text: "Skilled in wireframing, prototyping, and responsive design, delivering functional and visually appealing interfaces.",
    },
    {
      iconSrc: "/assets/images/icon-dev.svg",
      iconAlt: "Web development icon",
      title: "Web development",
      text: "High-quality development of sites at the professional level.",
    },
    {
      iconSrc: "/assets/images/icon-app.svg",
      iconAlt: "mobile app icon",
      title: "Mobile apps",
      text: "Professional development of applications for iOS and Android.",
    },
    {
      iconSrc: "/assets/images/icon-design.svg",
      iconAlt: "design icon",
      title: "Graphic Designer",
      text: "The most modern and high-quality design made at a professional level.",
    },
  ];

  return (
    <>
      <Navbar page="About" />
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Experienced UI/UX Designer specializing in creating intuitive,
            user-centered designs for web and mobile platforms. 
            Skilled in wireframing, prototyping, and responsive design,
            delivering functional and visually appealing interfaces. Adept at
            aligning user needs with business goals to enhance digital
            experiences
          </p>

          
        </section>

        <section className="service">
          <h3 className="h3 service-title">What I&rsquo;m doing</h3>
          <ul className="service-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "bg-transparent relative text-xl p-[1px] overflow-hidden"
                )}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: "10px" }}
                >
                  <MovingBorder duration={6000} rx="30%" ry="30%">
                    <div
                      className={cn(
                        "h-10 w-20 opacity-[0.8] bg-[radial-gradient(var(--yellow-500)_40%,transparent_60%)]"
                      )}
                    />
                  </MovingBorder>
                </div>
                <li
                  className={cn(
                    "relative bg-gray-600/[0.1] backdrop-blur-xl text-white flex items-start justify-start gap-4 w-full h-full text-sm antialiased p-5"
                  )}
                  style={{ borderRadius: "10px" }}
                >
                  <div className="service-icon-box">
                    <img
                      src={service.iconSrc}
                      alt={service.iconAlt}
                      width="40"
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>
                    <p className="service-item-text">{service.text}</p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </section>

      </article>
    </>
  );
};

export default About;
