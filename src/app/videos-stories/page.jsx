"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

export default function VideosStoriesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>From Somewhere Else</div>
        <div className={styles.navigation}>
          <div className={`${styles.navLink} ${styles.navLinkActive}`}>
            Videos & Stories
          </div>
          <Link href="/my-lessons" className={styles.navLink}>
            My Lessons
          </Link>
          <div className={styles.navLink}>Get in Touch</div>
        </div>
      </div>

      <div className={styles.backgroundSection}>
        <div className={styles.sectionTitle}>Videos & Stories</div>
        <div className={styles.contentGrid}>
          <div className={styles.gridRow}>
            <div className={styles.leftColumn}>
              <div className={styles.visualDataContainer}>
                <div className={styles.visualData}>
                  <img
                    src="/placeholder-image-1.jpg"
                    alt="Visual data"
                    className={styles.image}
                  />
                </div>
                <img
                  src="/placeholder-image-2.jpg"
                  alt="Tall image"
                  className={styles.tallImage}
                />
                <img
                  src="/placeholder-image-3.jpg"
                  alt="Wide image"
                  className={styles.wideImage}
                />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.rightColumnContent}>
                <img
                  src="/placeholder-image-4.jpg"
                  alt="Large image"
                  className={styles.largeImage}
                />
                <div className={styles.iconGrid}>
                  <div className={styles.iconGroup}>
                    {/* <img src="/placeholder-icon-1.svg" alt="Icon" className={styles.icon} /> */}
                    <svg width="32" height="32" className={styles.icon}>
                      <circle cx="16" cy="16" r="14" fill="#E0E0E0" />
                    </svg>
                    {/* <img src="/placeholder-icon-2.svg" alt="Round icon" className={styles.roundIcon} /> */}
                    <svg width="32" height="32" className={styles.roundIcon}>
                      <rect
                        x="4"
                        y="4"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                  <div className={styles.iconGroup2}>
                    {/* <img src="/placeholder-icon-3.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                    {/* <img src="/placeholder-icon-4.svg" alt="Tall icon" className={styles.tallIcon} /> */}
                    <svg width="16" height="32" className={styles.tallIcon}>
                      <rect
                        x="2"
                        y="2"
                        width="12"
                        height="28"
                        rx="6"
                        fill="#90CAF9"
                      />
                    </svg>
                    {/* <img src="/placeholder-icon-5.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                    {/* <img src="/placeholder-icon-6.svg" alt="Round icon" className={styles.roundIcon} /> */}
                    <svg width="32" height="32" className={styles.roundIcon}>
                      <rect
                        x="4"
                        y="4"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#BDBDBD"
                      />
                    </svg>
                    {/* <img src="/placeholder-icon-7.svg" alt="Tall icon" className={styles.tallIcon} /> */}
                    <svg width="16" height="32" className={styles.tallIcon}>
                      <rect
                        x="2"
                        y="2"
                        width="12"
                        height="28"
                        rx="6"
                        fill="#90CAF9"
                      />
                    </svg>
                    {/* <img src="/placeholder-icon-8.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                  </div>
                  <div className={styles.iconGroup3}>
                    {/* <img src="/placeholder-icon-9.svg" alt="Stretch icon" className={styles.stretchIcon} /> */}
                    <svg width="40" height="20" className={styles.stretchIcon}>
                      <rect
                        x="2"
                        y="2"
                        width="36"
                        height="16"
                        rx="8"
                        fill="#A5D6A7"
                      />
                    </svg>
                    {/* <img src="/placeholder-icon-10.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                    {/* <img src="/placeholder-icon-11.svg" alt="Round icon" className={styles.roundIcon} /> */}
                    <svg width="32" height="32" className={styles.roundIcon}>
                      <rect
                        x="4"
                        y="4"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </div>
                  <div className={styles.iconGroup4}>
                    {/* <img src="/placeholder-icon-12.svg" alt="Center icon" className={styles.centerIcon} /> */}
                    <svg width="32" height="32" className={styles.centerIcon}>
                      <circle cx="16" cy="16" r="10" fill="#FF8A65" />
                    </svg>
                    {/* <img src="/placeholder-icon-13.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                    {/* <img src="/placeholder-icon-14.svg" alt="Thin icon" className={styles.thinIcon} /> */}
                    <svg width="32" height="8" className={styles.thinIcon}>
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="4"
                        rx="2"
                        fill="#CE93D8"
                      />
                    </svg>
                    {/* <img src="/placeholder-icon-15.svg" alt="Icon" className={styles.icon2} /> */}
                    <svg width="32" height="32" className={styles.icon2}>
                      <circle cx="16" cy="16" r="14" fill="#FFD700" />
                    </svg>
                    {/* <img src="/placeholder-icon-16.svg" alt="Tall icon" className={styles.tallIcon} /> */}
                    <svg width="16" height="32" className={styles.tallIcon}>
                      <rect
                        x="2"
                        y="2"
                        width="12"
                        height="28"
                        rx="6"
                        fill="#90CAF9"
                      />
                    </svg>
                  </div>
                </div>
                <img
                  src="/placeholder-image-5.jpg"
                  alt="Bottom image"
                  className={styles.bottomImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor
          sed. Suspendisse lobortis vitae quis vehicula pellentesque sit idLorem
          ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
          Suspendisse lobortis vitae quis vehicula pellentesque sit idLorem
          ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
          Suspendisse lobortis vitae quis vehicula pellentesque sit id
        </div>
      </div>

      <div className={styles.experiencesSection}>
        <div className={styles.sectionHeading}>
          Sharing my experiences and tips
        </div>
        <div className={styles.videoContainer}>
          <img
            src="/placeholder-arrow-left.svg"
            alt="Left arrow"
            className={styles.arrowIcon}
          />
          <div className={styles.videoWrapper}>
            <img
              src="/placeholder-video-bg.jpg"
              alt="Video background"
              className={styles.videoBackground}
            />
            <div className={styles.videoPlaceholder}>(Linked to a YT vid)</div>
          </div>
          <img
            src="/placeholder-arrow-right.svg"
            alt="Right arrow"
            className={styles.arrowIcon}
          />
        </div>

        <div className={styles.storiesHeading}>
          More stories from all over the world
        </div>
        <div className={styles.videoContainer}>
          <img
            src="/placeholder-arrow-left.svg"
            alt="Left arrow"
            className={styles.arrowIcon}
          />
          <div className={styles.videoPlaceholder2}>(Linked to a YT vid)</div>
          <img
            src="/placeholder-arrow-right.svg"
            alt="Right arrow"
            className={styles.arrowIcon}
          />
        </div>
      </div>

      <div className={styles.businessSection}>
        <div className={styles.businessContainer}>
          <div className={styles.businessTitle}>Business inquiries</div>
          <div className={styles.emailContainer}>
            <img
              src="/placeholder-email-icon.svg"
              alt="Email icon"
              className={styles.emailIcon}
            />
            <div className={styles.emailText}>email@email.com</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerLogo}>From Somewhere Else</div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
        </div>

        <div className={styles.footerColumn}>
          <div className={styles.footerHeading}>Heading</div>
          <div className={styles.footerLink}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
          <div className={styles.footerLinkSubsequent}>Link here</div>
        </div>

        <div className={styles.socialContainer}>
          <div className={styles.socialHeading}>Connect with us</div>
          <div className={styles.socialIcons}>
            <div className={styles.socialIcon}></div>
            <div className={styles.socialIcon}></div>
            <div className={styles.socialIcon}></div>
            <div className={styles.socialIcon}></div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}
      >
        <a
          href="/home"
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
      </div>
    </div>
  );
}
