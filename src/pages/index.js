import React from "react"

import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "purple" }}>
    <Header />
    <Link to="/contact/">Contact</Link>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x400" alt="" />
  </div>
)
