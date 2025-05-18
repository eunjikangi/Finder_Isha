"use client";
import React from "react";
import styles from "./styles.module.css";

export default function LanguageSelectionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>Welcome to</div>
      <div className={styles.mainTitle}>From Somewhere Else</div>
      <div className={styles.selectionContainer}>
        <div className={styles.chooseLanguage}>
          <span>Choose a langauge</span>
          <div>
            <svg
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrowIcon}
            >
              <path
                d="M9.79171 15.6667L37.2084 15.6667L23.5 37.2084L9.79171 15.6667Z"
                fill="#F5EFF7"
              />
            </svg>
          </div>
        </div>
        <div className={styles.languageOptions}>
          <div className={styles.languageOption}>한국어</div>
          <div className={styles.languageOption}>ENGLISH</div>
        </div>
      </div>
      
      <div className={styles.backgroundContainer}>
        <svg
          width="1506"
          height="1147"
          viewBox="0 0 1506 1147"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.backgroundLines}
        >
          <rect width="1506" height="1147" fill="#C8C8C8" />
          <path d="M0 0L1504.95 1146.09" stroke="#858585" />
          <path d="M1.0459 1146.09L1504.95 0.91333" stroke="#858585" />
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <a href="/home" style={{
          padding: '12px 24px',
          background: '#4F46E5',
          color: 'white',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600
        }}>
          다음으로
        </a>
      </div>
    </div>
  );
}
