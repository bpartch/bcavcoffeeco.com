/**
 * Layout component that queries for data with Gatsby's StaticQuery component
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: .9rem;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <p>© {new Date().getFullYear()}, {data.site.siteMetadata.title} All Rights Reserved.</p>
            <p>&nbsp;Built with <span role="img" aria-label="sparkling heart">💖</span>
            &nbsp;and <span role="img" aria-label="cup of coffee">☕</span></p>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
