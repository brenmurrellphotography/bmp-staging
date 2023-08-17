import React, { useEffect, useState } from "react"
import './banner.scss'
import { start } from "repl";
import { log } from "console";

interface Props {
  images?: string[]
}

const Banner = ({images} : Props) => {
  

  // useEffect(() => {
  //     document.readyState && setImageCount(images ? images.length : 0)
  // }, [document.readyState]);

  const [count, setCount] = useState(0);
  
  const imageCount = images ? images.length : 0;
  useEffect(() => {

      //Implementing the setInterval method
      const interval = setInterval(() => {
          const next = count === imageCount - 1 ? 0 : count + 1;
          setCount(next);
          
      }, 8000);

      //Clearing the interval
      return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="banner">
      {images?.map((image, i) => (
        <img key={i} src={image} className={`banner__image${count === i ? ' banner__image--current' : ''}`} />
      ))}
    </div>

  )
}

export default Banner
