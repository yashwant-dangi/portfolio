import react from "react";
import PlayStore from "components/Icons/playstore";
import AppStore from "components/Icons/appstore";
import styles from "./card.module.css";

export default function Card({ title, list = [], description, links = {} }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {list.length ? (
          <ul className={styles.ul}>
            {list.map((listitem, index) => {
              return (
                <li className={styles.li} key={index}>
                  {listitem}
                </li>
              );
            })}
          </ul>
        ) : null}
        {description ? <div>{description}</div> : null}
        {links.play ? (
          <a href={links.play} target={"_blank"} rel="noreferrer">
            <PlayStore className={styles.svg} />
          </a>
        ) : null}
        {links.ios ? (
          <a href={links.ios} target={"_blank"} rel="noreferrer">
            <AppStore className={styles.svg} />
          </a>
        ) : null}
      </div>
    </div>
  );
}
