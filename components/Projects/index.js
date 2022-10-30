import React from "react";
import Cards from "components/Cards";
import styles from "./projectlist.module.css";

const seedData = [
  {
    title: "Mamaearth",
    description: "Ecommerce App",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.mamaearthapp&hl=en_IN&gl=US",
      ios: "https://apps.apple.com/in/app/mamaearth-online-shopping-app/id1530385461",
    },
  },
  {
    title: "Boat Lifestyle",
    description: "Ecommerce App",
    links: {
      play: "https://play.google.com/store/apps/details?id=boatlifestylein.android.app&hl=en_IN&gl=US",
      ios: "",
    },
  },
  {
    title: "Letarez",
    description: "Travel Planning App",
    links: {
      play: "",
      ios: "",
    },
  },
  {
    title: "Mitra",
    description: "Customer Grievance App",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.vedang.gnidaApp&hl=en_IN&gl=US",
      ios: "",
    },
  },
];

function CardList() {
  return (
    <section className={styles.grid}>
      <h4 className="gradientText">Projects</h4>
      <div className={styles.cardgrid}>
        {seedData.map((cardData, index) => {
          return (
            <Cards
              key={index}
              title={cardData.title}
              description={cardData.description}
              links={cardData.links}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardList;
