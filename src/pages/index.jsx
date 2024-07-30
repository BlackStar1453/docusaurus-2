import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Intro from "../components/HomepageFeatures/intro";
import { checkGoogleFavicon } from "../utils";
import Features from "../components/HomepageFeatures/Features";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const handleDownloadClick = () => {
    // 调用 checkGoogleFavicon 函数
    checkGoogleFavicon();
  }
  return (
    <Features></Features>
  )
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
