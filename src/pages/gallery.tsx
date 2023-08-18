import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { LightBox } from "../components/Lightbox"
import { Gallery } from "../components/Gallery"


import imgArt1 from '../images/gallery/art/art-1.jpg';
import imgArt2 from '../images/gallery/art/art-2.jpg';
import imgArt3 from '../images/gallery/art/art-3.jpg';
import imgArt4 from '../images/gallery/art/art-4.jpg';
import imgArt5 from '../images/gallery/art/art-5.jpg';
import imgArt6 from '../images/gallery/art/art-6.jpg';

import imgArtThumb1 from '../images/gallery/art/thumbs/art-1.jpg';
import imgArtThumb2 from '../images/gallery/art/thumbs/art-2.jpg';
import imgArtThumb3 from '../images/gallery/art/thumbs/art-3.jpg';
import imgArtThumb4 from '../images/gallery/art/thumbs/art-4.jpg';
import imgArtThumb5 from '../images/gallery/art/thumbs/art-5.jpg';
import imgArtThumb6 from '../images/gallery/art/thumbs/art-6.jpg';


import imgAnimals1 from '../images/gallery/animals/animals-1.jpg';
import imgAnimals2 from '../images/gallery/animals/animals-2.jpg';
import imgAnimals3 from '../images/gallery/animals/animals-3.jpg';
import imgAnimals4 from '../images/gallery/animals/animals-4.jpg';
import imgAnimals5 from '../images/gallery/animals/animals-5.jpg';
import imgAnimals6 from '../images/gallery/animals/animals-6.jpg';

import imgAnimalsThumb1 from '../images/gallery/animals/thumbs/animals-1.jpg';
import imgAnimalsThumb2 from '../images/gallery/animals/thumbs/animals-2.jpg';
import imgAnimalsThumb3 from '../images/gallery/animals/thumbs/animals-3.jpg';
import imgAnimalsThumb4 from '../images/gallery/animals/thumbs/animals-4.jpg';
import imgAnimalsThumb5 from '../images/gallery/animals/thumbs/animals-5.jpg';
import imgAnimalsThumb6 from '../images/gallery/animals/thumbs/animals-6.jpg';

import imgStreet1 from '../images/gallery/street/street-1.jpg';
import imgStreet2 from '../images/gallery/street/street-2.jpg';
import imgStreet3 from '../images/gallery/street/street-3.jpg';
import imgStreet4 from '../images/gallery/street/street-4.jpg';
import imgStreet5 from '../images/gallery/street/street-5.jpg';
import imgStreet6 from '../images/gallery/street/street-6.jpg';

import imgStreetThumb1 from '../images/gallery/street/thumbs/street-1.jpg';
import imgStreetThumb2 from '../images/gallery/street/thumbs/street-2.jpg';
import imgStreetThumb3 from '../images/gallery/street/thumbs/street-3.jpg';
import imgStreetThumb4 from '../images/gallery/street/thumbs/street-4.jpg';
import imgStreetThumb5 from '../images/gallery/street/thumbs/street-5.jpg';
import imgStreetThumb6 from '../images/gallery/street/thumbs/street-6.jpg';

import imgPortraits01 from '../images/gallery/portraits/portraits-01.jpg';
import imgPortraits02 from '../images/gallery/portraits/portraits-02.jpg';
import imgPortraits03 from '../images/gallery/portraits/portraits-03.jpg';
import imgPortraits04 from '../images/gallery/portraits/portraits-04.jpg';
import imgPortraits05 from '../images/gallery/portraits/portraits-05.jpg';
import imgPortraits06 from '../images/gallery/portraits/portraits-06.jpg';
import imgPortraits07 from '../images/gallery/portraits/portraits-07.jpg';
import imgPortraits08 from '../images/gallery/portraits/portraits-08.jpg';
import imgPortraits09 from '../images/gallery/portraits/portraits-09.jpg';
import imgPortraits10 from '../images/gallery/portraits/portraits-10.jpg';
import imgPortraits11 from '../images/gallery/portraits/portraits-11.jpg';
import imgPortraits12 from '../images/gallery/portraits/portraits-12.jpg';

import imgPortraitsThumb01 from '../images/gallery/portraits/thumbs/portraits-01.jpg';
import imgPortraitsThumb02 from '../images/gallery/portraits/thumbs/portraits-02.jpg';
import imgPortraitsThumb03 from '../images/gallery/portraits/thumbs/portraits-03.jpg';
import imgPortraitsThumb04 from '../images/gallery/portraits/thumbs/portraits-04.jpg';
import imgPortraitsThumb05 from '../images/gallery/portraits/thumbs/portraits-05.jpg';
import imgPortraitsThumb06 from '../images/gallery/portraits/thumbs/portraits-06.jpg';
import imgPortraitsThumb07 from '../images/gallery/portraits/thumbs/portraits-07.jpg';
import imgPortraitsThumb08 from '../images/gallery/portraits/thumbs/portraits-08.jpg';
import imgPortraitsThumb09 from '../images/gallery/portraits/thumbs/portraits-09.jpg';
import imgPortraitsThumb10 from '../images/gallery/portraits/thumbs/portraits-10.jpg';
import imgPortraitsThumb11 from '../images/gallery/portraits/thumbs/portraits-11.jpg';
import imgPortraitsThumb12 from '../images/gallery/portraits/thumbs/portraits-12.jpg';
import { SEO } from "../components/seo";


const imageArtArray = [
  { url: imgArt1, altText: 'A black and white image of a boat on a water in the fog', thumbUrl: imgArt1 },
  { url: imgArt2, altText: 'Abstract photo of red feather', thumbUrl: imgArt2 },
  { url: imgArt3, altText: '3 physalis (Cape gooseberry) seed pods', thumbUrl: imgArt3 },
  { url: imgArt4, altText: 'A european honey bee eating honey', thumbUrl: imgArt4 },
  { url: imgArt5, altText: 'A close up of an eye in black and white', thumbUrl: imgArt5 },
  { url: imgArt6, altText: 'A black and white image of a retro reel to reel tape player', thumbUrl: imgArt6 }
]

const imageStreetArray = [
  { url: imgStreet1, altText: 'A man playing a steel drum', thumbUrl: imgStreetThumb1 },
  { url: imgStreet2, altText: 'A boy wearing a VR headset', thumbUrl: imgStreetThumb2 },
  { url: imgStreet3, altText: 'A woman carrying a walking stick steps on to a bus at a bus stop', thumbUrl: imgStreetThumb3 },
  { url: imgStreet4, altText: 'A woman walking down the street carrying her lunch', thumbUrl: imgStreetThumb4 },
  { url: imgStreet5, altText: 'A motion-blurred man riding a scooter down a wet inner-city street', thumbUrl: imgStreetThumb5 },
  { url: imgStreet6, altText: 'A smiling lady wearing a raincoat and carrying a shopping bag', thumbUrl: imgStreetThumb6 }
]

const imageAnimalsArray = [
  { url: imgAnimals1, altText: 'A high angle image of a young dog as he looks up into the frame ', thumbUrl: imgAnimalsThumb1 },
  { url: imgAnimals2, altText: 'A cow stands in a field on a dark grey day', thumbUrl: imgAnimalsThumb2 },
  { url: imgAnimals3, altText: 'A small smiling dog with a shaved back lies in the grass in front of her ball', thumbUrl: imgAnimalsThumb3 },
  { url: imgAnimals4, altText: 'A large dog portrait', thumbUrl: imgAnimalsThumb4 },
  { url: imgAnimals5, altText: 'A large dog portraiit', thumbUrl: imgAnimalsThumb5 },
  { url: imgAnimals6, altText: 'A closeup of a rooster who looks straight down the camera lens', thumbUrl: imgAnimalsThumb6 }
]

const imagePortraitsArray = [
  { url: imgPortraits01, altText: 'A woman laughing stands in a doorway of a building covered in graffit', thumbUrl: imgPortraitsThumb01 },
  { url: imgPortraits02, altText: 'A smiling older man', thumbUrl: imgPortraitsThumb02 },
  { url: imgPortraits03, altText: 'A smiling young man whose face is divided by a mirror so that his eyes look in opposite directions', thumbUrl: imgPortraitsThumb03 },
  { url: imgPortraits04, altText: 'A smiling young boy', thumbUrl: imgPortraitsThumb04 },
  { url: imgPortraits05, altText: 'A young man with a beard and his hair in a bun looks to the right of this headshot', thumbUrl: imgPortraitsThumb05 },
  { url: imgPortraits06, altText: 'A smiling woman looks at something off in the distance out of frame', thumbUrl: imgPortraitsThumb06 },
  { url: imgPortraits07, altText: 'A contemplative woman looks off into the distance', thumbUrl: imgPortraitsThumb07 },
  { url: imgPortraits08, altText: 'A teenaged boy looks off into the distance', thumbUrl: imgPortraitsThumb08 },
  { url: imgPortraits09, altText: 'A laughing woman plays with a dog', thumbUrl: imgPortraitsThumb09 },
  { url: imgPortraits10, altText: 'A low key portrait image of a man with long hair and a beard', thumbUrl: imgPortraitsThumb10 },
  { url: imgPortraits11, altText: 'A teenaged boy looks straight into the camera with his head tilted slightly forward', thumbUrl: imgPortraitsThumb11 },
  { url: imgPortraits12, altText: 'A concerned man holds his hand up to the camera to stop it taking his photos', thumbUrl: imgPortraitsThumb12 }
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
      <Gallery title="Portraits" images={imagePortraitsArray} />
      <Gallery title="Street / Documentary" images={imageStreetArray} />
      <Gallery title="Animals" images={imageAnimalsArray} />
      <Gallery title="Art" images={imageArtArray} />
    </main>
  )
}

export default GalleryPage

export const Head: HeadFC = () => <SEO title="Bren Murrell | Galleries" />
