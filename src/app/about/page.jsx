"use client";
import React from "react";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <img
        src="/about-banner.jpg"
        alt="About Banner"
        className={styles.bannerImage}
      />

      <div className={styles.navigationButtons}>
        <a href="/" className={styles.homeButton}>
          Back to Home
        </a>
      </div>
    </div>
  );
}
