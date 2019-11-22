import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About Me</h1>
    <p>
      My name is Shane. I like Drupal, Gatsby, Guitars, and some other things.
    </p>
    <Section title="Hello" body="This is the body" />
    <Section title="Section 2" body="This is another section" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default AboutPage
