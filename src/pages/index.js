import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Intro from "../components/HomepageFeatures/intro";
import { checkGoogleFavicon } from "./utils"
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const handleDownloadClick = () => {
    // 调用 checkGoogleFavicon 函数
    checkGoogleFavicon();
  }
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <button
            className="button button--secondary button--lg"
            onClick={handleDownloadClick}
          >
            点击下载 👉
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
      <Intro />
      </main>
    </Layout>
  );
}
