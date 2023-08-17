import React, { useState } from "react"
// import FsLightbox from "fslightbox-react"
import FsLightbox from "fslightbox-react";

function App() {
	const [toggler, setToggler] = useState(false);

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
			<button onClick={() => setToggler(!toggler)}>
				Open the lightbox.
			</button>

      <button onClick={() => openLightboxOnSlide(1)}>
				Open the lightbox on the first slide.
			</button>
			<button onClick={() => openLightboxOnSlide(2)}>
				Open the lightbox on the second slide.
			</button>

      <img src="https://picsum.photos/200/200" onClick={() => openLightboxOnSlide(3)} />

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					"https://i.imgur.com/fsyrScY.jpg",
					"https://www.youtube.com/watch?v=3nQNiWdeH2Q",
					"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				]}
        slide={lightboxController.slide}
			/>
		</>
	);
}

export default App;