import React from 'react';
import {PhotoButton} from './ImgButton.styles';
import {MdOutlineInsertPhoto} from 'react-icons/md';

//color: brand or gray
function ImgButton({color, imgRef, setImgData, style}) {
  const previewImg = (e) => {
    //Get an object from the input type file with the following structure
    const file = e.target.files; //{0:File,length:value}
    //Verify if a file has been chosen in the input
    if (file.length > 0) {
      const preview = imgRef.current;
      const fileReader = new FileReader();
      //When an event of uploading is detected, assign the url to the img element
      //e.target.result returns a temporal url with the img data
      fileReader.onload = (e) => (preview.src = e.target.result);
      //file[0] = 0:File, contains the img data
      fileReader.readAsDataURL(file[0]);
      preview.style.display = 'block';
      setImgData(file[0]);
      /*
        if the user closes the image and
        wants to upload the same img again, the input doesn't chage,
        so the function doesn't execute. To avoid that clean the input file,
        anyways the data is stored in our state ImgData
      */
      e.target.value = '';
    }
  };
  return (
    <PhotoButton style={style}>
      <input
        type="file"
        name="uploadImg"
        id="uploadImg"
        accept="image/*"
        onInput={previewImg}
      />
      <label className={color}>
        <MdOutlineInsertPhoto />
      </label>
    </PhotoButton>
  );
}

export {ImgButton};
