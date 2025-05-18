"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function LanguageSelectionPage() {
  const router = useRouter();

  // localStorage에서 언어를 불러오거나, 기본값은 'ko'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "ko";
    }
    return "ko";
  });

  // 언어별 번역 텍스트
  const translations = {
    ko: {
      welcome: "환영합니다!",
      title: "From Somewhere Else",
      choose: "언어를 선택하세요",
      next: "다음으로"
    },
    en: {
      welcome: "Welcome to",
      title: "From Somewhere Else",
      choose: "Choose a language",
      next: "Next"
    }
  };

  // 언어 변경 함수
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    router.push("/home");
  };

  useEffect(() => {
    // 예: i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>{translations[language].welcome}</div>
      <div className={styles.mainTitle}>{translations[language].title}</div>
      <div className={styles.selectionContainer}>
        <div className={styles.chooseLanguage}>
          <span>{translations[language].choose}</span>
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
          <div
            className={`${styles.languageOption} ${language === "ko" ? styles.selected : ""}`}
            onClick={() => handleLanguageChange("ko")}
          >
            한국어
          </div>
          <div
            className={`${styles.languageOption} ${language === "en" ? styles.selected : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            ENGLISH
          </div>
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
    </div>
  );
}
