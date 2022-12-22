import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import Resume from "../components/Section/resume";

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience - Tahir Ahmad</title>
      </Helmet>
      <PageLayout>
        <Resume />
      </PageLayout>
    </>
  );
}
