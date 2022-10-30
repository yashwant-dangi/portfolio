import react from "react";
import styles from "./card.module.css";

export default function Card({ title, list = [] }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <ul className={styles.ul}>
          {list.map((listitem, index) => {
            return (
              <li className={styles.li} key={index}>
                {listitem}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
