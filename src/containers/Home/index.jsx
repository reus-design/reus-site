import React, { useRef } from 'react'
import { Container, Row, Col, Flex, Icon, Typography } from 'reus'
import styled from '@emotion/styled'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import HeaderDocs from 'Components/HeaderDocs'
import { TweenMax } from 'gsap'

const Home = () => {
  const homeContainer = useRef(null)
  const profileEl = useRef(null)
  const cardEl = useRef(null)
  const chartOvalEl = useRef(null)
  const chartBarEl = useRef(null)
  const desktopEl = useRef(null)
  const parallaxIt = (e, node, movement) => {
    const relX = e.pageX - homeContainer.current.offsetLeft
    const relY = e.pageY - homeContainer.current.offsetTop
    const _x = (relX - homeContainer.current.clientWidth / 2) / homeContainer.current.clientWidth * movement
    const _y = (relY - homeContainer.current.clientHeight / 2) / homeContainer.current.clientHeight * movement
    TweenMax.to(node.target, 1, {
      x: node.x + _x,
      y: node.y + _y
    });
  }

  const handleMouseMove = e => {
    parallaxIt(e, {target: cardEl.current, x: 468, y: 42}, -18)
    parallaxIt(e, {target: profileEl.current, x: 36, y: 0}, -14)
    parallaxIt(e, {target: chartBarEl.current, x: 0, y: 436}, -40)
    parallaxIt(e, {target: desktopEl.current, x: 101, y: 131}, -10)
    parallaxIt(e, {target: chartOvalEl.current, x: 474, y: 420}, -25)
  }

  const Nav = styled.nav`
    position: absolute;
    left: 0;
    right: 0;
    z-index: 99999;
  `
  const Banner  = styled.div`
    background: ${({theme}) => theme.background};
  `
  const GetStarted = styled(Link)`
    background: #6095ff;
    padding: 10px 35px;
    display: inline-block;
    height: 44px;
    color: #fff;
    border-radius: 23px;
    font-size: 16px;
    margin-top: 40px !important;
    outline: none;
    transition: background .3s ease;
    &:hover {
      background: #3a7bff;
    }
  `
  const Illus = styled.div`
    svg {
      width: 100%;
    }
  `
  return (
    <>
      <Nav>
        <Container xl>
          <HeaderDocs/>
        </Container>
      </Nav>
      <Banner ref={homeContainer} onMouseMove={handleMouseMove}>
        <Container xl>
          <Row align="center" css={css`
            height: 100vh;
          `}>
            <Col md={6}>
              <div>
                <Typography
                  tag="h1"
                  type="headline-super"
                  size={70}
                  weight="bold"
                  css={theme => css`
                    color: ${theme.colorHeadline};
                    white-space: nowrap;`}
                >
                  Reus Design
                </Typography>
                <Typography
                  tag="p"
                  type="label"
                  weight="normal"
                  css={theme => css`
                    color: ${theme.color};
                  `}
                >
                  UI Library for React
                </Typography>
                <GetStarted to="/docs">Get Started</GetStarted>
              </div>
            </Col>
            <Col md={6}>
              <Illus>
                <svg width="747px" height="644px" viewBox="0 0 747 644" version="1.1">
                  <defs>
                    <rect id="path-1" x="0" y="0" width="433" height="272" rx="20"></rect>
                    <filter x="-17.0%" y="-21.5%" width="133.9%" height="154.0%" filterUnits="objectBoundingBox" id="filter-2">
                      <feOffset dx="0" dy="15" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                      <feGaussianBlur stdDeviation="22" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0.43   0 0 0 0 0.43   0 0 0 0 0.43  0 0 0 0.134850543 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                  </defs>
                  <g id="Reus-Home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-645.000000, -170.000000)">
                      <g id="illus" transform="translate(645.000000, 170.000000)">
                        <g id="illustrasi">
                          <rect id="Rectangle" fillOpacity="0.163977582" fill="#B1F2FF" x="264" y="0" width="303" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy" fillOpacity="0.163977582" fill="#B1F2FF" x="82" y="137" width="197" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-2" fillOpacity="0.163977582" fill="#B1F2FF" x="605" y="221" width="142" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-4" fillOpacity="0.163977582" fill="#B1F2FF" x="298" y="578" width="197" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-15" fillOpacity="0.163977582" fill="#B1F2FF" x="0" y="295" width="214" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-5" fillOpacity="0.163977582" fill="#B1F2FF" x="499" y="480" width="156" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-13" fillOpacity="0.163977582" fill="#B1F2FF" x="339" y="385" width="156" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-18" fillOpacity="0.163977582" fill="#B1F2FF" x="200" y="480" width="108" height="66" rx="33"></rect>
                          <rect id="Rectangle-Copy-3" fillOpacity="0.101788949" fill="#558BFF" x="422" y="335" width="124" height="66" rx="33"></rect>
                        </g>
                        <g id="components" transform="translate(98.000000, 19.000000)">
                          <g id="desktop" ref={desktopEl} transform="translate(101.000000, 131.000000)">
                              <g id="bg">
                                  <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                  <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1"></use>
                              </g>
                              <g id="header" transform="translate(141.000000, 35.000000)">
                                  <g id="header-card">
                                      <rect id="bg" fill="#E2E9FC" x="0" y="0" width="73" height="42" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="12" width="42.5833333" height="6" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="24" width="27.375" height="6" rx="3"></rect>
                                  </g>
                                  <g id="header-card" transform="translate(92.000000, 0.000000)">
                                      <rect id="bg" fill="#E2E9FC" x="0" y="0" width="73" height="42" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="12" width="42.5833333" height="6" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="24" width="27.375" height="6" rx="3"></rect>
                                  </g>
                                  <g id="header-card" transform="translate(183.000000, 0.000000)">
                                      <rect id="bg" fill="#E2E9FC" x="0" y="0" width="73" height="42" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="12" width="42.5833333" height="6" rx="3"></rect>
                                      <rect id="line" fill="#A7BEFC" x="15.2083333" y="24" width="27.375" height="6" rx="3"></rect>
                                  </g>
                              </g>
                              <g id="content" transform="translate(141.000000, 92.000000)">
                                  <rect id="bg" fill="#E2E9FC" x="0" y="0" width="256" height="147" rx="3"></rect>
                                  <g id="wrapper" transform="translate(22.000000, 19.000000)">
                                      <g id="content-card">
                                          <g id="list" transform="translate(0.000000, 62.000000)" fill="#A7BEFC">
                                              <rect id="line" x="0" y="0" width="47" height="6" rx="3"></rect>
                                              <rect id="line" x="0" y="13" width="39" height="6" rx="3"></rect>
                                          </g>
                                          <rect id="box" fill="#C7D6FF" x="0" y="0" width="39" height="39" rx="2"></rect>
                                      </g>
                                      <g id="content-card" transform="translate(84.000000, 0.000000)">
                                          <g id="list" transform="translate(0.000000, 62.000000)" fill="#A7BEFC">
                                              <rect id="line" x="0" y="0" width="47" height="6" rx="3"></rect>
                                              <rect id="line" x="0" y="13" width="39" height="6" rx="3"></rect>
                                          </g>
                                          <rect id="box" fill="#C7D6FF" x="0" y="0" width="39" height="39" rx="2"></rect>
                                      </g>
                                      <g id="content-card" transform="translate(167.000000, 0.000000)">
                                          <g id="list" transform="translate(0.000000, 62.000000)" fill="#A7BEFC">
                                              <rect id="line" x="0" y="0" width="47" height="6" rx="3"></rect>
                                              <rect id="line" x="0" y="13" width="39" height="6" rx="3"></rect>
                                          </g>
                                          <rect id="box" fill="#C7D6FF" x="0" y="0" width="39" height="39" rx="2"></rect>
                                      </g>
                                  </g>
                              </g>
                              <g id="sidebar" transform="translate(36.000000, 35.000000)">
                                  <rect id="bg" fill="#E2E9FC" x="0" y="0" width="87" height="204" rx="3"></rect>
                                  <g id="box" transform="translate(20.000000, 16.000000)" fill="#A7BEFC">
                                      <g id="nav-list" transform="translate(0.000000, 62.000000)">
                                          <rect id="line" x="0" y="0" width="47" height="6" rx="3"></rect>
                                          <rect id="line" x="0" y="13" width="39" height="6" rx="3"></rect>
                                          <rect id="line" x="0" y="26" width="47" height="6" rx="3"></rect>
                                      </g>
                                      <circle id="nav-thumb" cx="24" cy="19" r="19"></circle>
                                  </g>
                              </g>
                          </g>
                          <g id="chart" ref={chartBarEl} transform="translate(0.000000, 436.000000)">
                              <rect id="bg" fill="#F1E4FF" x="0" y="0" width="134" height="120" rx="8"></rect>
                              <g id="lines" transform="translate(32.000000, 30.000000)" fill="#D8B4FF">
                                  <rect id="line" x="15" y="18" width="8" height="41" rx="4"></rect>
                                  <rect id="line" x="0" y="32" width="8" height="27" rx="4"></rect>
                                  <rect id="line" x="31" y="0" width="8" height="59" rx="4"></rect>
                                  <rect id="line" x="46" y="8" width="8" height="51" rx="4"></rect>
                                  <rect id="line" x="61" y="26" width="8" height="33" rx="4"></rect>
                              </g>
                          </g>
                          <g id="card" ref={cardEl} transform="translate(468.000000, 42.000000)">
                              <rect id="bg" fill="#D4E0FF" x="0" y="0" width="156" height="72" rx="8"></rect>
                              <circle id="Oval" fill="#88A5F2" cx="38.5" cy="36.5" r="17.5"></circle>
                              <rect id="line" fill="#88A5F2" x="79" y="19" width="56" height="6" rx="3"></rect>
                              <rect id="line" fill="#88A5F2" x="79" y="33" width="56" height="6" rx="3"></rect>
                              <rect id="line" fill="#88A5F2" x="79" y="47" width="56" height="6" rx="3"></rect>
                          </g>
                          <g id="profile" ref={profileEl} transform="translate(36.000000, 0.000000)">
                              <rect id="bg" fill="#FFEBEB" x="0" y="0" width="107" height="98" rx="8"></rect>
                              <g id="list" transform="translate(23.000000, 64.000000)" fill="#FFC3C3">
                                  <rect id="line" x="0" y="0" width="62" height="6" rx="3"></rect>
                                  <rect id="line" x="0" y="14" width="40" height="6" rx="3"></rect>
                              </g>
                              <circle id="Oval" fill="#FFC3C3" cx="52.5" cy="33.5" r="18.5"></circle>
                          </g>
                          <g id="chart" ref={chartOvalEl} transform="translate(474.000000, 420.000000)">
                              <rect id="bg" fill="#D5FAFD" x="0" y="0" width="120" height="120" rx="8"></rect>
                              <g id="oval" transform="translate(26.000000, 26.000000)">
                                  <path d="M58.730529,9.9412582 C64.9603569,16.0883443 68.8627501,24.5883443 68.9964506,34 L34,34 L34,0.00354942651 C34.1663844,0.00118579653 34.3330537,0 34.5,0 C43.9434388,0 52.5007012,3.79417213 58.730529,9.9412582 C65.0704912,16.1970158 69,24.8896149 69,34.5 C69,53.5538239 53.5538239,69 34.5,69 C15.4461761,69 0,53.5538239 0,34.5 C0,15.4461761 15.4461761,0 34.5,0 C43.9434388,0 52.5007012,3.79417213 58.730529,9.9412582 Z" id="Combined-Shape" fill="#8CDDE3"></path>
                                  <path d="M34,34 L34,0.00354942651 C34.1663844,0.00118579653 34.3330537,0 34.5,0 C53.3868776,0 68.7290496,15.1766885 68.9964506,34 L34,34 Z" id="Combined-Shape" fill="#5ABAC2"></path>
                              </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Illus>
            </Col>
          </Row>
        </Container>
      </Banner>
    </>     
  )
}

export default Home