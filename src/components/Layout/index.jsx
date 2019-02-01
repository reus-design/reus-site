import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'Components/extra/Sidebar'
import { css } from '@emotion/core'

const Layout = ({ children, location }) => (
  <>
    <Sidebar location={location}/>
    <div>
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
