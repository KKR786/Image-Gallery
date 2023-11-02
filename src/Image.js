import React from 'react';
import { useDrag, useDrop } from "react-dnd";

const Image = ({ image, index, moveImage, selected, toggleSelection }) => {
    const [, ref] = useDrag({
      type: "IMAGE",
      item: { index },
    });
  
    const [, drop] = useDrop({
      accept: "IMAGE",
      hover: (draggedImage) => {
        if (draggedImage.index !== index) {
          moveImage(draggedImage.index, index);
          draggedImage.index = index;
        }
      },
    });
  
    return (
      <div
        ref={(node) => ref(drop(node))}
        className={`image ${selected ? "selected" : ""}`}
      >
        <input type="checkbox" className='checkbox' checked={selected} onChange={toggleSelection} />
        <img src={image} height={200} alt={`Image ${index}`} />
      </div>
    );
  };

export default Image
