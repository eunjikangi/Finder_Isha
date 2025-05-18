"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function VideoPage() {
  return (
    <div className={styles.container}>
      <img
        src="/video-banner.jpg"
        alt="Video Banner"
        className={styles.bannerImage}
      />

      <div className={styles.navigationButtons}>
        <Link href="/" className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
