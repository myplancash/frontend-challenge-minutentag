/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from "react";
import { GalleryContainer,  ImageWrapper, Image, RemoveButton } from './ImageGallery.styles';

/* function Image({ src, onRemove }) {
	return (
		<div className="image">
			<img src={src} alt={src} />
			<button className="remove" onClick={onRemove}>X</button>
		</div>
	);
} */

export function ImageGallery({ links }) {

	const [galleryImages, setGalleryImages] = useState(links || []);

	const handleRemoveImage = (index) => {
		const updatedImages = [...galleryImages];
		updatedImages.splice(index, 1)
		setGalleryImages(updatedImages)
	}

	return (
		<GalleryContainer>
    {galleryImages.map((link, index) => (
      <ImageWrapper key={link}>
        <Image src={link} alt={link} />
        <RemoveButton onClick={() => handleRemoveImage(index)}>Remove</RemoveButton>
      </ImageWrapper>
    ))}
  </GalleryContainer>
	);
}
