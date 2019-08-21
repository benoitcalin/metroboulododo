import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const Job = (props) => (
  <Layout>
    <h1>{props.pageContext.slug}</h1>
    <h5>{props.pageContext.title}</h5>
  </Layout>
)

export default Job
