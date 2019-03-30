/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

const headingOneStyle = {
  ...scale(1.5),
  marginBottom: rhythm(1.5),
  marginTop: 0,
}

const linkStyle = {
  boxShadow: `none`,
  textDecoration: `none`,
  color: `inherit`,
}
const headingThreeStyle = {
  fontFamily: `Montserrat, sans-serif`,
  marginTop: 0,
}

const containerStyle = {
  marginLeft: `auto`,
  marginRight: `auto`,
  maxWidth: rhythm(24),
  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 style={headingOneStyle}>
          <Link style={linkStyle} to="/">
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={headingThreeStyle}>
          <Link style={linkStyle} to="/">
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div style={containerStyle}>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

Layout.defaultProps = {
  location: '',
  title: '',
}

Layout.propTypes = {
  location: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
}

export default Layout
