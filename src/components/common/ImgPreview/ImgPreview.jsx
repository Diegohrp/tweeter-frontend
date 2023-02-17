import React from 'react';
import {ImgPreviewContainer} from './ImgPreview.styles';
import {MdClose} from 'react-icons/md';

const ImgPreview = ({setImgData, imgRef}) => {
  const removeImg = () => {
    const preview = imgRef.current;
    preview.style.display = 'none';
    preview.src = '';
    setImgData(null);
  };

  return (
    <ImgPreviewContainer>
      {imgRef.current?.style.display === 'block' && (
        <button onClick={removeImg}>
          <MdClose />
        </button>
      )}
      <img alt="Preview image" ref={imgRef} />
    </ImgPreviewContainer>
  );
};

export {ImgPreview};
