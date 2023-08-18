import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"

const Contact = () => {
  return (
    <main>
      <h2>Contact me</h2>
      <p>Watch this space closely!</p>

    </main>
  )
}

export default Contact

export const Head: HeadFC = () => <SEO />
