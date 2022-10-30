import React from "react";
import Cards from "components/Cards";
import styles from "./cardlist.module.css";

const seedData = [
  {
    title: "Languages",
    list: ["JavaScript (ES6)", "TypeScript", "HTML5/CSS3", "Node.js", "Python"],
  },
  {
    title: "Frameworks",
    list: ["React", "Next.js", "React Native", , "Express"],
  },
  {
    title: "Tools",
    list: ["Git", "Chrome DevTools", "Docker", "Kubernetes"],
  },
  {
    title: "Databases",
    list: ["MongoDB", "MySQL"],
  },
];

function CardList() {
  return (
    <section className={styles.grid}>
      <h4 className="gradientText">Skills</h4>
      <div className={styles.cardgrid}>
        {seedData.map((cardData, index) => {
          return (
            <Cards key={index} title={cardData.title} list={cardData.list} />
          );
        })}
      </div>
    </section>
  );
}

export default CardList;
