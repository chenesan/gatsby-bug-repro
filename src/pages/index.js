import React from "react"
import { graphql } from "gatsby"

export default (props) => {
  const { excerpt } = props.data.allMarkdownRemark.edges[0].node;
  return <div>{excerpt}</div>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
        }
      }
    }
  }
`