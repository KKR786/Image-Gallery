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
    //toggle selection
  const toggleSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };
  //delete
  const handleDelete = () => {
    const updatedImages = props.images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    props.setImages(updatedImages);
    setSelectedImages([]);
  };

  const addImageOnClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
        const newImages = Array.from(e.target.files);
    
        newImages.forEach((file) => {
          const reader = new FileReader(); // read the selected image
    
          reader.onload = (event) => {
            const imageSrc = event.target.result;
    
            // creating new Image object with the data URL
            const updatedImages = [...props.images, imageSrc];
            props.setImages(updatedImages);
          };
    
          // read the file as a data URL
          reader.readAsDataURL(file);
        });
      };
    input.click();
  }

  return (
    <>
      {selectedImages.length > 0 && (
        <div className="selection" style={{transition: 'transform 0.5s ease',}}>
          <div className="selected-items">
            <span className="material-symbols-rounded">check_box</span>
            <p>
              {selectedImages.length}{" "}
              {selectedImages.length === 1 ? "File" : "Files"} Selected
            </p>
          </div>
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
        <div className="add" onClick={addImageOnClick}>
          <span className="material-symbols-rounded">add_photo_alternate</span>
          <p>Add Images</p>
        </div>
      </div>
    </>
  );
}

export default Gallery;
