import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Typography, Flex } from 'reus'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({location}) => {
  const Nav = styled.nav`
    width: 260px;
    background: ${({theme}) => theme.background};
    border-right: 1px solid ${({theme}) => theme.colorBorder};
    position: fixed;
    height: 100vh;
  `
  const Brand = styled(Link)`
    padding: 23px 30px;
    display: block;
    margin-bottom: 30px;
  `
  const LinkModif = styled(Link)`
    font-size: 16px;
    border-right: ${({active, theme}) => active ? `1px solid ${theme.colorLine}` : 'none'};
    color: ${({theme}) => theme.color};
  `
  const Lists = styled.ul`
    li {
      a {
        padding: 8px 30px;
        display: block;
      }
    }
  `
  return (
    <StaticQuery
      query={graphql`
        query SidebarQuery {
          logo: file(relativePath: { eq: "reus-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          allMdx(sort: {fields: [frontmatter___order, frontmatter___title]}) {
            edges {
              node {
                frontmatter {
                  title
                  order
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Nav>
            <div>
              <Brand to="/">
                <Flex align="center" gutter={10}>
                  <div>
                    <Img css={css`width: 20px;`} fluid={data.logo.childImageSharp.fluid}/>
                  </div>
                  <div>
                    <Typography
                      tag="h2"
                      type="eyebrow"
                      css={theme => css`color: ${theme.color};`}
                    >
                      Reus Design
                    </Typography>
                  </div>
                </Flex>
              </Brand>
              <Lists>
                {
                  data.allMdx.edges.map((edge, i) => {
                    const active = `/${edge.node.fields.slug}` === location.pathname ? true : undefined
                    return (
                      <li key={i}>
                        <LinkModif active={active} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</LinkModif>
                      </li>
                    )
                  })
                }
              </Lists>
            </div>
          </Nav>
        )
      }}
    />
  )
}

export default Sidebar