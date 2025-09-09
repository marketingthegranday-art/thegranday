import React from "react";
import styles from "../styles/LandingBlogs.module.css";
import { useRouter } from "next/navigation";
import Flex from '@react-css/flex';

const articles = [
  {
    title: "10 Steps to Have an Outdoor Wedding",
    description: "The beauty of having an outdoor wedding is undeniable. Whether you envision exchanging vows in a blooming garden, on a sandy beach, or beneath a canopy of trees, planning an outdoor wedding requires careful consideration and organization....",
    author: "Sneha Joseph",
    image:  "/landing/" + "blog 1.jpg",
    highlight: true,
  },
  {
    title: "5 reasons to hire a wedding planner",
    image:  "/landing/" + "Blog 2.jpg",
  },
  {
    title: "10 Hidden Costs That Can Blow Your Wedding Budget - And How to Avoid Them",
    image:  "/landing/" + "blog 3.jpg",
  },
  {
    title: "Vendor Nightmares? A Guide to Choosing Reliable Wedding vendors",
    image:  "/landing/" + "Blog 4.jpg",
  },
];

const LandingBlogs = () => {

  const navigate = useRouter();

  return (
    <section className={styles.insightsSection}>
      <div className={styles.header}>
        <div className={styles.blogHeadingTitle + " landing-headings"}>Real Stories, <br /> Practical Tips, and Industry Trends.</div>
      </div>

      <div className={styles.articlesGrid} onClick={() => navigate.push("/blog/10-Steps-to-Have-an-Outdoor-Wedding")}>
        {/* Featured Article */}
        <div className={styles.featuredArticle}>
          <div className={styles.featuredImageContainer}>
            <img src={articles[0].image} alt={articles[0].title} className={styles.articleImage} />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.badge}>Must Read</span>
            <Flex column justifySpaceBetween style={{ marginTop: "1rem", height: "90%" }}>
              <div>
                <p className={styles.blogTitleText}>{articles[0].title}</p>
                <p className={styles.blogDespText}>{articles[0].description}</p>
              </div>
              <div>
                <div className={styles.author}>
                  <span className={styles.authorName}>{articles[0].author}</span>
                </div>
              </div>
            </Flex>
          </div>
        </div>

        {/* Small Articles */}
        <div className={styles.smallArticles}>
          {articles.slice(1).map((article, index) => (
            <div className={styles.smArticle}  key={index}>
              <div key={index} className={styles.smallArticle}>
                <img src={article.image} alt={article.title} className={styles.articleSubImage} />
              </div>
              <Flex alignItemsCenter className={styles.articleSubText}>
                <p className={styles.smallArticlesTitle}>{article.title}</p>
                {/* <span className={`${styles.category} ${styles[article.category.toLowerCase()]}`}>{article.category}</span> */}
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingBlogs;
