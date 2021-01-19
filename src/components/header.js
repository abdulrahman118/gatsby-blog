import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      
      <h1 className="intro-header" style={{ margin: 0 }}>        
          {siteTitle}                
        <div className="intro-description">
          {description}
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
