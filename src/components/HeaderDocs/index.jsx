import React from 'react'
import { Flex, Icon, Row, Col, Switch } from 'reus'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { ThemeContextConsumer } from 'Contexts/ThemeContext'
import SEO from 'Components/SEO'

const SearchInput = styled.input`
  padding: 10px 14px;
  border: none;
  font-size: 16px;
  transition: background .3s ease;
  outline: none;
  background: ${({theme}) => theme.formBg};
  &:focus {
    background: #f7f7f7;
  }
  border-radius: 6px;
`

export const HeaderMenu = ({location, logo}) => (
  <ThemeContextConsumer>
    {
      ({theme, handleTheme}) => (
        <Row align="center" justify="space-between" css={css`height: 80px;`}>
          <Col css={css`
            display: ${location ? 'none' : 'block'};
          `}>
            <div>
              <Link to="/">
                <Img css={css`width: 20px;`} fluid={logo.childImageSharp.fluid}/>
              </Link>
            </div>
          </Col>
          <Col css={css`
            display: ${location ? 'block' : 'none'};
          `}>
            <div>
              <SearchInput type="text" placeholder="Search"/>
            </div>
          </Col>
          <Col>
            <div css={css`
              a {
                font-size: 16px;
              }
            `}>
              <Flex gutter={18} align="center">
                <div>
                  <Link to="/docs">
                    Guide
                  </Link>
                </div>
                <div>
                  <Link to="/docs/button">
                    Components
                  </Link>
                </div>
                <div>
                  <Switch onChange={handleTheme} toggle={theme === 'dark'}/>
                </div>
                <div>
                  <a href="https://github.com/muhrusdi/reus-design" target="_blank">
                    <Icon css={theme => css`fill: ${theme.color};`} width={22} height={22} type="github"/>
                  </a>
                </div>
              </Flex>
            </div>
          </Col>
        </Row>
      )
    }
  </ThemeContextConsumer>
)

const HeaderDocs = (props) => {
  const Header = styled.div`
    padding: 0 ${props.location ? 40 : 0}px;
    a {
      color: ${({theme}) => theme.color};
    }
  `
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          logo: file(relativePath: { eq: "reus-logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Header>
          <SEO
            title="Reus Design"
          />
          <HeaderMenu {...props} logo={data.logo}/>
        </Header>
      )}
    />
  )
}

export default HeaderDocs