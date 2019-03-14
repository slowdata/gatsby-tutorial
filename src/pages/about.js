import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const about = () => (
  <div style={{ color: "teal" }}>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React</p>
    <Link to="/">Home</Link>
  </div>
)

export default about
