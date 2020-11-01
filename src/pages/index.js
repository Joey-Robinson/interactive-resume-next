import React from "react"
import ContactMain from "../components/contact/contact.main"
import Experience from "../components/experience/experience.main"
import Layout from "../components/layout"
import Skills from "../components/skills/skills"

const IndexPage = () => (
  <Layout>
    <ContactMain />
    <Experience />
    <Skills />
  </Layout>
)

export default IndexPage
