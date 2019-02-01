import React from 'react'
import Layout from 'Components/Layout'
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import HeaderDocs from 'Components/HeaderDocs'
import { graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import { Row, Col, Flex, Icon } from 'reus'
import styled from '@emotion/styled'

const Docs = (props) => {
  const DocsWrapper = styled.div`
    position: absolute;
    left: 260px;
    top: 0;
    padding: 0 30px;
    right: 0;
    height: initial;
    min-height: 100vh;
    background: ${({theme}) => theme.background};
  `
  const Header = styled.div`
    background: #fff;
    padding: 20px 40px;
  `
  const ContextBox = styled.div`
  `
  const ContextBoxComp = styled.div`
    padding: 20px 40px;
    font-size: 16px;
    line-height: 2;
    color: ${({theme}) => theme.colorBody};
    h1 {
      color: ${({theme}) => theme.color};
    }
    h2 {
      font-weight: normal;
      color: ${({theme}) => theme.color};
    }
    ul {
      padding-left: 16px;
    }
    p {
      & > code {
        background: ${({theme}) => theme.codeBgColor};
        border-radius: 3px;
        padding: 3px 6px;
        font-size: 14px;
      }
    }
    .CodeMirror {
      font-size: 14px;
      height: 100%!important;
      background: none;
      pre {
        line-height: 20.8px !important;
      }
      .CodeMirror-line {
        padding: 0 10px !important;
      }
      .CodeMirror-lines {
        padding: 10px 0!important;
      }
      .CodeMirror-linenumber {
        padding: 0 7px 0 5px !important;
        color: #adadad;
      }
    }
    .cm-s-neo {
      color: ${({theme}) => theme.codeStringColor} !important;
      .cm-node, .cm-tag {
        color: #ca26c2;
      }
      .cm-attribute {
        color: #27b1a0;
      }
      .cm-string {
        color: #3197cc;
      }
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      overflow: hidden;
      border-radius: 6px;
      empty-cells: show;
      border: 1px solid ${({theme}) => theme.colorBorder};
      width: 100%;
      margin: 8px 0 16px;
      font-size: 14px;
      line-height: 1.5;
      background: ${({theme}) => theme.compViewBgColor};
      font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;;
      margin: 2em 0;
      th {
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 500;
        background: rgba(0,0,0,0.02);
        border-bottom: 1px solid ${({theme}) => theme.colorBorder};
      }
      th, td {
        padding: 14px 24px;
        text-align: left;
      }
      tr {
        &:not(:last-of-type) {
          border-bottom: 1px solid ${({theme}) => theme.colorBorder};
        }
      }
      td {
        &:first-of-type {
          font-weight: 500;
          width: 20%;
          color: ${({theme}) => theme.color};
        }
        &:nth-of-type(3) {
          width: 22%;
          color: #c41d7f;
          word-break: break-all;
        }
        &:last-of-type {
          width: 13%;
        }
      }
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
          color: ${({theme}) => theme.colorBody};
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
  const { data, location, pageContext } = props
  
  if (typeof window !== `undefined`) {
    if (location.pathname === '/docs') {
      navigate('/docs/introduce/')
    }
  }
  
  return (
    <Layout location={location}>
      <DocsWrapper>
        <HeaderDocs location={location}/>
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
                  {
                    // data.mdx.headings && data.mdx.headings.filter(h => h.depth === 2).map((heading, i) => (
                    //   <li key={i}>
                    //     <a href={`#${heading.value}`}>{heading.value}</a>
                    //   </li>
                    // ))
                    data.mdx.tableOfContents && data.mdx.tableOfContents.items.map(toc => toc.items && toc.items.map((h, i) => (
                      <li key={i}>
                        <a href={h.url}>{h.title}</a>
                      </li>
                    )))
                  }
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
      headings {
        value
        depth
      }
      tableOfContents
      code {
        body
      }
    }
  }
`