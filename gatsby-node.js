exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        postsRemark: allMarkdownRemark {
          edges {
            node {
              excerpt
            }
          }
        }
      }
    `
  )
}

