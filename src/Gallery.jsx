import React from 'react';

function Gallery( props ) {

  return (
    <div className="gallery">
      {props.data.map((item) => (
          <img key={item.id} src={item.url} alt="" />
        ))}
    </div>
  )
}

export default Gallery
