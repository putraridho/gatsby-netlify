import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

function BlogRoll({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <article>
              <header>
                <p>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                  <span>&bull;</span>
                  <span>{post.frontmatter.date}</span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link to={post.frontmatter.path}>Keep Reading</Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
