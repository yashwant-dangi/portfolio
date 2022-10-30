import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.grid}>
      <h4 className="gradientText">About</h4>
      <div className={styles.content}>
        I&apos;m a motivated full-stack engineer who has experience building and
        scaling web applications and services in various domains. I like to work
        in high impact environments, and contributing to growing development
        teams by helping build great products. My goal is to always build
        applications that are scalable and efficient under the hood while
        providing engaging, pixel-perfect user experiences.
      </div>
    </section>
  );
}

export default About;
