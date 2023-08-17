import React, { useState } from "react";
import { LightBox } from "../Lightbox";
import FsLightbox from "fslightbox-react";

import './gallery.scss'

interface Image {
  url: string,
  thumbUrl?: string,
  altText?: string
}


interface Props {
  title: string,
  images?: Image[]
}

const Gallery = ({images, title}: Props) => {
  const [toggler, setToggler] = useState(false);

  const [imgUrls, setImgUrls] = useState(images?.map(image => {
    return image.url;
  }));

  const [customAttributes, setCustomAttributes] = useState(images?.map(image => {
    return { alt: image.altText }
  }))

  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

  function openLightboxOnSlide(number: number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}
  
  
  return (
    <>
      <h2>{title}</h2>
      
      { !images && <p>No images to show</p> }

      <div className="gallery">
        { images?.map((image, i) => (
          <React.Fragment key={i}>

            <img
              src={image.url}
              className="gallery__thumb"
              alt={image.altText}
              title={image.altText}
              onClick={() => openLightboxOnSlide(i + 1)}
            />
          </React.Fragment>
        ))}
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={imgUrls}
          customAttributes={customAttributes}
          slide={lightboxController.slide}
        />
      </div>
      {/* <LightBox /> */}
    </>
  )
}

export default Gallery
