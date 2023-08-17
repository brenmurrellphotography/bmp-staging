import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { LightBox } from "../components/Lightbox"
import { Gallery } from "../components/Gallery"


// import image1 from '../images/banner-1.jpg';
// import image2 from '../images/banner-2.jpg';
// import image3 from '../images/banner-3.jpg';
// import image4 from '../images/banner-4.jpg';
// import imgHeadshot from '../images/gallery/headshot.jpg';
// import imgCow from '../images/gallery/cow.jpg';


import imgArt1 from '../images/gallery/art/art-1.jpg';
import imgArt2 from '../images/gallery/art/art-2.jpg';
import imgArt3 from '../images/gallery/art/art-3.jpg';
import imgArt4 from '../images/gallery/art/art-4.jpg';
import imgArt5 from '../images/gallery/art/art-5.jpg';
import imgArt6 from '../images/gallery/art/art-6.jpg';

import imgAnimals1 from '../images/gallery/animals/animals-1.jpg';
import imgAnimals2 from '../images/gallery/animals/animals-2.jpg';
import imgAnimals3 from '../images/gallery/animals/animals-3.jpg';
import imgAnimals4 from '../images/gallery/animals/animals-4.jpg';
import imgAnimals5 from '../images/gallery/animals/animals-5.jpg';
import imgAnimals6 from '../images/gallery/animals/animals-6.jpg';

import imgStreet1 from '../images/gallery/street/street-1.jpg';
import imgStreet2 from '../images/gallery/street/street-2.jpg';
import imgStreet3 from '../images/gallery/street/street-3.jpg';
import imgStreet4 from '../images/gallery/street/street-4.jpg';
import imgStreet5 from '../images/gallery/street/street-5.jpg';
import imgStreet6 from '../images/gallery/street/street-6.jpg';

import imgPortrait1 from '../images/gallery/portraits/portraits-01.jpg';
import imgPortrait2 from '../images/gallery/portraits/portraits-02.jpg';
import imgPortrait3 from '../images/gallery/portraits/portraits-03.jpg';
import imgPortrait4 from '../images/gallery/portraits/portraits-04.jpg';
import imgPortrait5 from '../images/gallery/portraits/portraits-05.jpg';
import imgPortrait6 from '../images/gallery/portraits/portraits-06.jpg';
import imgPortrait7 from '../images/gallery/portraits/portraits-07.jpg';
import imgPortrait8 from '../images/gallery/portraits/portraits-08.jpg';
import imgPortrait9 from '../images/gallery/portraits/portraits-09.jpg';
import imgPortrait10 from '../images/gallery/portraits/portraits-10.jpg';
import imgPortrait11 from '../images/gallery/portraits/portraits-11.jpg';
import imgPortrait12 from '../images/gallery/portraits/portraits-12.jpg';


const imageArtArray = [
  {
    url: imgArt1,
    altText: 'Image 1',
    thumbUrl: imgArt1
  },
  {
    url: imgArt2,
    altText: 'Image 2',
    thumbUrl: imgArt2
  },
  {
    url: imgArt3,
    altText: 'Image 3',
    thumbUrl: imgArt3
  },
  {
    url: imgArt4,
    altText: 'Image 4',
    thumbUrl: imgArt4
  },
  {
    url: imgArt5,
    altText: 'Headshot',
    thumbUrl: imgArt5
  },
  {
    url: imgArt6,
    altText: 'Cow standing in a paddock',
    thumbUrl: imgArt6
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
      <Gallery title="All work" images={imageArtArray} />
    </main>
  )
}

export default GalleryPage