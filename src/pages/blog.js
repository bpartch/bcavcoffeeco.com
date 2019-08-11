import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
  margin-bottom: 2rem;
`

const Post = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #333;
  margin-bottom: 10px;
`

const MarkerHeader = styled.h3`
  display: inline;
  margin-bottom: 10px;
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
  margin-bottom: 10px;
  padding: 2px 10px;
  border-radius: 5px;
  border: 0 solid #999;
  background-color: lightgray;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>Blog</h1>
        <p>Please choose an article that interests you to read below.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post>
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
            </Link>
              <div css={css`margin-bottom: .3em;`}>
                <ArticleDate>{node.frontmatter.date} - </ArticleDate>
                <ReadingTime>{node.fields.readingTime.text}</ReadingTime>
              </div>
              <p>{node.excerpt}</p>
          </div>
        </Post>
        ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
