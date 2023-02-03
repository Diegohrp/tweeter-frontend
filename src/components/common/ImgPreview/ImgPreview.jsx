import React from 'react';
import {ImgPreviewContainer} from './ImgPreview.styles';
import {MdClose} from 'react-icons/md';

const ImgPreview = ({setImgData, imgRef}) => {
  const [button, setButton] = React.useState(false);

  const removeImg = () => {
    const preview = imgRef.current;
    preview.style.display = 'none';
    preview.src = '';
    setImgData(null);
    setButton(false);
  };

  const OnLoad = (e) => {
    setButton(true);
  };
  return (
    <ImgPreviewContainer onLoad={OnLoad}>
      {button && (
        <button onClick={removeImg}>
          <MdClose />
        </button>
      )}
      <img alt="Preview image" ref={imgRef} />
    </ImgPreviewContainer>
  );
};

export {ImgPreview};
