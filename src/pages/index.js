import React from "react"
import { graphql } from "gatsby"

export default (props) => {
  const { excerpt, html } = props.data.allMarkdownRemark.edges[0].node;
  return <div>
    This is transformed markdown content: 
    <span dangerouslySetInnerHTML={{ __html: html}} />
    This is excerpt (see that content in inline code disappear): {excerpt}
  </div>
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          html
        }
      }
    }
  }
`