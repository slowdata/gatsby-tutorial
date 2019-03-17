import React from "react"

import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>
    <header style={{ marginBottom: "1.5rem" }}>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <h3 style={{ display: "inline" }}>MyFakeSite</h3>
      </Link>
      <ul style={{ display: "inline", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)

export default Layout
