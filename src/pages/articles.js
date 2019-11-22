import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image";

import Layout from "../components/layout"

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.nodes;

  return (
    <Layout>
      <h1>Articles</h1>
      {articles.map(article => (
        <>
          <Link to={article.path.alias}>
            <h2>{article.title}</h2>
          </Link>
          <Img
            fluid={article.relationships.field_image.localFile.childImageSharp.fluid}
            alt={article.field_image.alt}
          />
        </>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allNodeArticle {
      nodes {
        id
        title
        path {
          alias
        }
        created
        field_image {
          alt
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Articles
