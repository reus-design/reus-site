import React from 'react'
import Layout from 'Components/Layout'
import HeaderDocs from 'Components/HeaderDocs'
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { graphql, navigate} from 'gatsby'
import { css } from '@emotion/core'
import { Row, Col, Flex, Icon } from 'reus'
import styled from '@emotion/styled'

const Docs = ({data}) => {
  const DocsWrapper = styled.div`
    position: absolute;
    left: 260px;
    top: 0;
    right: 0;
    padding: 0 30px;
  `
  const Header = styled.div`
    background: #fff;
    padding: 20px 40px;
  `
  const ContextBox = styled.div`
    background: #fff;
  `
  const ContextBoxComp = styled.div`
    padding: 20px 40px;
    font-size: 16px;
    line-height: 2;
    ul {
      padding-left: 16px;
    }
    p {
      color: #333;
    }
  `
  const FlexModif = styled(Flex)`
    height: 38px;
    a {
      color: #333;
    }
  `
  const ContextBoxRight = styled.div`
    padding: 30px 20px;
    ul {
      list-style: none;
      padding: 0;
      li {
        a {
          color: #444;
          padding: 4px 10px;
          display: block;
        }
      }
    }
  `
  const SearchInput = styled.input`
    padding: 10px 14px;
    border: none;
    font-size: 16px;
    transition: background .3s ease;
    outline: none;
    background: #f7f7f7;
    &:focus {
      background: #f7f7f7;
    }
    border-radius: 6px;
  `
  return (
    <Layout>
      <DocsWrapper>
        <HeaderDocs/>
        <ContextBox>
          <Row>
            <Col md={9}>
              <ContextBoxComp>
                <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
              </ContextBoxComp>
            </Col>
            <Col md={3}>
              <ContextBoxRight>
                <ul>
                  <li>
                    <a href="#">Feature</a>
                  </li>
                  <li>
                    <a href="#">Environment</a>
                  </li>
                  <li>
                    <a href="#">Class</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                </ul>
              </ContextBoxRight>
            </Col>
          </Row>
        </ContextBox>
      </DocsWrapper>
    </Layout>
  )
}

export default Docs

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`