import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import image1 from "./assets/images/image-1.webp";
import image2 from "./assets/images/image-2.webp";
import image3 from "./assets/images/image-3.webp";
import image4 from "./assets/images/image-4.webp";
import image5 from "./assets/images/image-5.webp";
import image6 from "./assets/images/image-6.webp";
import image7 from "./assets/images/image-7.webp";
import image8 from "./assets/images/image-8.webp";
import image9 from "./assets/images/image-9.webp";
import image10 from "./assets/images/image-10.jpeg";
import image11 from "./assets/images/image-11.jpeg";
import Gallery from "./Gallery";

function App() {
  const data = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
  const [images, setImages] = React.useState(data);

  const handleDelete = (imageIds) => {
    const updatedImages = images.filter(
      (image) => !imageIds.includes(image.id)
    );
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>Image Gallery</h1>
        <Gallery images={images} setImages={setImages} />
      </div>
    </DndProvider>
  );
}

export default App;
