import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Intro from "../components/HomepageFeatures/intro";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
      <Intro />
      </main>
      <Analytics />
    </Layout>
  );
}
