import styled from 'styled-components';

const Loader = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 25px);
  border-radius: 50%;
  border: 5px solid #86c5da;
  border-top-color: ${(props) => props.theme.brandColor};
  border-left-color: ${(props) => props.theme.brandColor};
  z-index: 10;
  animation: spiner 1s ease-in infinite;

  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export {Loader};
