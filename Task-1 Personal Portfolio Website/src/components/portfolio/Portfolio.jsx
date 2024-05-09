import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Edification - An Online Learning Platform",
    github: "https://github.com/Sandhya-1728/Edification-Website",
    demo: "/",
    brief:
      "https://www.canva.com/design/DAGEpWNZWKc/CaKbjjGRXvaffzubPCIvsQ/edit?utm_content=DAGEpWNZWKc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 2,
    image: IMG2,
    title: "Diabetes Prediction System",
    github: "https://github.com/Sandhya-1728/Diabetes-Prediction",
    demo: "/",
    brief: "https://github.com/Sandhya-1728/Diabetes-Prediction/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Taxi Booking System in Java",
    github: "https://github.com/Sandhya-1728/Taxi-Booking-System",
    demo: "/",
    brief:
      "https://github.com/Sandhya-1728/Taxi-Booking-System/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather App",
    github: "https://github.com/Sandhya-1728/Weather-App",
    demo: "/",
    brief: "https://github.com/Sandhya-1728/Weather-App/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "Doc-Chain Trustshield : Transforming Verification through Blockchain Brilliance",
    github: "https://github.com/Sandhya-1728/Doc-Chain",
    demo: "https://doc-chain-verification.vercel.app/",
    brief: "https://github.com/Sandhya-1728/Doc-Chain/blob/main/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "Breast Cancer Classification using Machine Learning Algorithms",
    github: "https://github.com/Sandhya-1728/Breast-Cancer-Classification",
    demo: "/",
    brief: "https://github.com/Sandhya-1728/Breast-Cancer-Classification/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My most recent work can be found on GitHub</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;