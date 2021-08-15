import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id:{eq:$id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPost