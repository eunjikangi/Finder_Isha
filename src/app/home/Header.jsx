import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
      <Link href="/home" className={styles.navItem}>
      From Somewhere Else
          </Link>
        <nav className={styles.navigation}>
          <Link href="/videos-stories" className={styles.navItem}>
            Videos & Stories
          </Link>
          <Link href="/my-lessons" className={styles.navItem}>
            My Lessons
          </Link>
          <div className={styles.navItem}>Get in Touch</div>
        </nav>
      </div>
    </header>
  );
} 