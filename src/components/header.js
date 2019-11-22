import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import Menu from "./menu"
const Header = ({ siteTitle }) => {
  const headerStyle = css`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
  `
  const wrapperStyle = css`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;
    justify-content: space-between;
  `
  const headingStyle = css`
    margin: 0;
  `
  const linkStyle = css`
    color: white;
    text-decoration: none;
  `
  return (
    <header css={headerStyle}>
      <div css={wrapperStyle}>
        <h1 css={headingStyle}>
          <Link to="/" css={linkStyle}>
            {siteTitle}
          </Link>
        </h1>
        <Menu />
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header
