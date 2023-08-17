import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { LightBox } from "../components/Lightbox"
import { Gallery } from "../components/Gallery"


import image1 from '../images/banner-1.jpg';
import image2 from '../images/banner-2.jpg';
import image3 from '../images/banner-3.jpg';
import image4 from '../images/banner-4.jpg';
import imgHeadshot from '../images/gallery/headshot.jpg';
import imgCow from '../images/gallery/cow.jpg';


const imageArray = [
  {
    url: image1,
    altText: 'Image 1',
    thumbUrl: image1
  },
  {
    url: image2,
    altText: 'Image 2'
  },
  {
    url: image3,
    altText: 'Image 3'
  },
  {
    url: image4,
    altText: 'Image 4'
  },
  {
    url: imgHeadshot,
    altText: 'Headshot'
  },
  {
    url: imgCow,
    altText: 'Cow standing in a paddock'
  }
]

const GalleryPage = () => {
  return (
    <main>
      <h1>Our galleries</h1>
      <p>
        Welcome to the galleries page. Here you'll find samples
        of the various styles of photography we specialise in.
      </p>
      <p>
        See something you like? Give us a <a href="tel:+64274670548">call</a>&nbsp;
        now to discuss booking us to work with you. Keen on an art print?&nbsp;
        <a href="sms:+64274670548?body=I'm interested in one of your art prints">
          Send use a text to let us know
        </a>.
      </p>
      <Gallery title="All work" images={imageArray} />
    </main>
  )
}

export default GalleryPage