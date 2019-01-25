import React from 'react'
import Layout from 'Components/Layout'
import styled from 'styled-components'
import { Typography } from 'reus'

const Starter = () => {
  const Box = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return (
    <Layout>
      <Box>
        <div>
          <Typography
            tag="h1"
            type="headline"
          >
            Gatsby Starter
          </Typography>
          <Typography
            tag="p"
            type="body"
            align="center"
          >
            Build your web with Gasbyjs
          </Typography>
        </div>
      </Box>
    </Layout>
  )
}

export default Starter