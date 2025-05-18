"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function MyLessonsPage() {
  return (
    <>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>My Lessons</h1>

        <div className={styles.videoPreview} />

        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialItem}>
            <img
              src="https://placehold.co/50x50/888888/888888"
              alt="Testimonial"
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialText}>
              &quot;Lorem ipsum dolor sit amet consectetur. Condimentum eget
              vitae ligula sed urna sit sagittis interdum a.&quot;
            </div>
          </div>
          <div className={styles.testimonialItem}>
            <img
              src="https://placehold.co/50x50/888888/888888"
              alt="Testimonial"
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialText}>
              &quot;Lorem ipsum dolor sit amet consectetur. Condimentum eget
              vitae ligula sed urna sit sagittis interdum a.&quot;
            </div>
          </div>
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
          sed. Suspendisse lobortis vitae quis vehicula pellentesque sit. Id
          Lorem ipsum dolor sit amet consectetur. Elementum nisi duis tortor
          sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id
        </p>

        <section className={styles.howItWorksSection}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsList}>
            <div className={styles.stepItem}>
              <i className="ti ti-message" />
              <div className={styles.stepText}>
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className={styles.stepItem}>
              <i className="ti ti-message" />
              <div className={styles.stepText}>
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <div className={styles.stepItem}>
              <i className="ti ti-message" />
              <div className={styles.stepText}>
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.classPreviewSection}>
          <h2 className={styles.sectionTitle}>Class Preview</h2>
          <div className={styles.classPreviewVideo} />
          <p className={styles.previewDescription}>
            Lorem ipsum dolor sit amet consectetur. Elementum nisi duis!
          </p>
          <button className={styles.bookButton}>Book a lesson</button>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLogo}>From Somewhere Else</div>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <div className={styles.footerHeading}>Heading</div>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerHeading}>Heading</div>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerHeading}>Heading</div>
              <div className={styles.footerLinks}>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
                <a href="#" className={styles.footerLink}>
                  Link here
                </a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.footerHeading}>Connect with us</div>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
                <div className={styles.socialIcon}></div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className={styles.navigationButtons}>
        <Link href="/home" className={styles.prevButton}>
          이전
        </Link>
        <Link href="/videos-stories" className={styles.nextButton}>
          다음으로
        </Link>
      </div>
    </>
  );
}
