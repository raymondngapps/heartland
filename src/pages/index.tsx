import React, { useState } from "react"
import {graphql} from 'gatsby';
import type { HeadFC, PageProps } from "gatsby"
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Carousel from "../components/Carousel";
import { Trans } from 'gatsby-plugin-react-i18next';

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// 
// https://blog.logrocket.com/react-intl-internationalize-your-react-apps/
// https://lokalise.com/blog/gatsby-i18n/
const IndexPage: React.FC<PageProps> = () => {
  const [ currentPage, setCurrentPage ] = useState<number>(0);

  return (
    <main style={pageStyles}>
      <ResponsiveAppBar />
      <Carousel currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title><Trans>Home Page</Trans></title>

// Use for multiple languages
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
