"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>From Somewhere Else</div>
          <nav className={styles.navigation}>
            <Link href="/videos-stories" className={styles.navItem}>
              Videos &amp; Stories
            </Link>
            <Link href="/my-lessons" className={styles.navItem}>
              My Lessons
            </Link>
            <div className={styles.navItem}>Get in Touch</div>
          </nav>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>Great design is invisible</div>
          <div className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur
          </div>
          <button className={styles.primaryButton}>Button</button>
        </div>
        <div className={styles.heroImage}></div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
          sed. Suspendisse laboris vitae quis vehicula pellentesque sit id. Urna
          posuere consequat velit vulputate facilisis pretium drus accumsan sit.
          Vel venenatis.
        </p>
        <div className={styles.imageGrid}>
          <div className={styles.gridImage}></div>
          <div className={styles.gridImage}></div>
          <div className={styles.gridImage}></div>
          <div className={styles.gridImage}></div>
        </div>
      </section>

      <section className={styles.videosSection}>
        <h2 className={styles.sectionTitle}>Videos &amp; Stories</h2>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
          sed. Suspendisse laboris vitae quis vehicula pellentesque sit id
        </p>
        <div className={styles.categoryTabs}>
          <div className={styles.categoryTab}>Life Abroad</div>
          <div className={styles.categoryTab}>Language Learning</div>
          <div className={styles.categoryTab}>Culture</div>
        </div>
        <div className={styles.videoContainer}></div>
        <div className={styles.readMore}>Read more&gt;</div>
      </section>

      <section className={styles.lessonsSection}>
        <h2 className={styles.sectionTitle}>My Lessons</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialAvatar}></div>
            <div className={styles.testimonialText}>
              Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
              sed. Suspendisse laboris vitae quis vehicula pellentesque sit id
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.testimonialAvatar}></div>
            <div className={styles.testimonialText}>
              Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
              sed. Suspendisse laboris vitae quis vehicula pellentesque sit id
            </div>
          </div>
        </div>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
          sed. Suspendisse laboris vitae quis vehicula pellentesque sit id
        </p>
        <div className={styles.lessonVideo}></div>
        <button className={styles.primaryButton}>Book a lesson</button>
        <div className={styles.readMore}>Read more&gt;</div>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <div className={styles.socialIcons}>
          <div className={styles.socialIcon}>
            <i className="ti ti-brand-youtube"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="ti ti-brand-instagram"></i>
          </div>
          <div className={styles.socialIcon}>
            <i className="ti ti-messages"></i>
          </div>
        </div>
        <div className={styles.email}>email@email.com</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>From Somewhere Else</div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
          <div className={styles.footerLink}>Link text</div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Connect with us</div>
          <div className={styles.footerSocial}>
            <div className={styles.footerSocialIcon}></div>
            <div className={styles.footerSocialIcon}></div>
            <div className={styles.footerSocialIcon}></div>
            <div className={styles.footerSocialIcon}></div>
          </div>
        </div>
      </footer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          margin: "32px 0",
        }}
      >
        <a
          href="/language-selection"
          style={{
            padding: "12px 24px",
            background: "#A3A3A3",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          이전
        </a>
        <a
          href="/videos-stories"
          style={{
            padding: "12px 24px",
            background: "#4F46E5",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          다음으로
        </a>
      </div>
    </div>
  );
}
