import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Home from "../components/Home";

const Index = () => {
  return (
    <Layout
      description="Cheat Sheets for referring technical concepts."
      wrapperClassName="homepage"
    >
      <Head>
        <title>Cheatsheets · Quick reference for tech interviews</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
