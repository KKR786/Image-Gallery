import React from "react";
import Image from "./Image";

function Gallery(props) {
  const [selectedImages, setSelectedImages] = React.useState([]);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...props.images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    props.setImages(updatedImages);
  };

  const toggleSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const handleDelete = () => {
    const updatedImages = props.images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    props.setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <>
      {selectedImages.length > 0 && (
        <div className="selection">
            <p>{selectedImages.length} {selectedImages.length === 1 ? 'File' : 'Files'} Selected</p>
          <button className="delete" onClick={handleDelete}>
            Delete Files
          </button>
        </div>
      )}
      <div className="gallery">
        {props.images.map((image, index) => (
          <Image
            key={index}
            image={image}
            index={index}
            moveImage={moveImage}
            selected={selectedImages.includes(index)}
            toggleSelection={() => toggleSelection(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
