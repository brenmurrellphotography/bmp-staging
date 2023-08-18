import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { Banner } from "../components/Banner"
import { SEO } from "../components/seo"

import banner1 from "../images/banner-1.jpg"
import banner2 from "../images/banner-2.jpg"
import banner3 from "../images/banner-3.jpg"
import banner4 from "../images/banner-4.jpg"

import brenMurrell from "../images/gallery/headshot.jpg"

const images = [
  banner1,
  banner2,
  banner3,
  banner4
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Banner images={images} />
      <main>
        <h1>Welcome!</h1>
        <div className="simple-grid">
          <div className="simple-grid__fill">
              <p>Hi, I'm Bren and I'm a photographer based in Tauwharenīkau, New Zealand.</p>
              <p>This is my new site and I'm working on getting it ready to accept bookings and sell my art prints. Please stand by!</p>
              <p>
                Take a look at our <Link to="/gallery">gallery</Link> page. If you
                see something you like, give us a&nbsp;
                <a href="tel:+64274670548">call</a>&nbsp;
                or&nbsp;
                <a href="sms:+64274670548?body=I'm interested in one of your art prints">
                  text
                </a>&nbsp;
                to arrange a booking or an art print
                today - or visit at us on <a href="https://facebook.com/brenmurrellphotography">Facebook</a>.
              </p>
          </div>
          <div className="simple-grid__400">
            <img src={brenMurrell} className="rounded" alt="Bren Murrell - low key headshot image of photographer" />
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />

