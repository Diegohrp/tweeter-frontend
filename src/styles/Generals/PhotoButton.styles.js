import styled from 'styled-components';

const PhotoButton = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  input[type='file'] {
    width: 155px;
    height: 100%;
    position: absolute;
    right: 0;
    opacity: 0;
    cursor: pointer;
  }
  label {
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 2rem;
  }
`;

export {PhotoButton};
