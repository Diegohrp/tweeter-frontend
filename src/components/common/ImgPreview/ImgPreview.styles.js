import styled from 'styled-components';

const ImgPreviewContainer = styled.figure`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  button {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.55);
    position: absolute;
    top: 10px;
    left: calc(10% - 15px);
    font-size: 2.5rem;
    color: white;
    border: none;
    outline: none;
    border-radius: 50%;
    cursor: pointer;
  }
  img {
    margin-top: 20px;
    width: 80%;
    border-radius: 8px;
    object-fit: contain;
    display: none;
  }
`;

export {ImgPreviewContainer};
