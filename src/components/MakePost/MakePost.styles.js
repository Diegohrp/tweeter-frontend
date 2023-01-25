import styled from 'styled-components';
import {textFont, titleFont} from '../../styles/GlobalStyles';
import {PhotoButton} from '../../styles/Generals/PhotoButton.styles';
import {GeneralButton} from '../../styles/Generals/Button.styles';

const MakePostContainer = styled.article`
  margin: 20px auto;
  width: min(95%, 745px);
  min-height: 155px;
  border-radius: 12px;
  padding: 11px 14px 15.5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.cards};
  position: relative;

  & > div:first-child {
    margin-bottom: 8.6px;
    border-bottom: 1px solid ${(props) => props.theme.borders};
    h2 {
      font-family: ${titleFont};
      font-size: 1.3rem;
      margin-bottom: 7.4px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: flex-start;

    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 12px;
    }
    textarea {
      width: 90%;

      padding-top: 10px;
      padding-bottom: 5px;
      overflow-y: hidden;
      font-family: ${textFont};
      font-size: 1.5rem;
      outline: none;
      border: none;
      resize: none;
    }
  }
  picture {
    width: 100%;
    display: flex;
    justify-content: center;

    #preview-img {
      margin-top: 20px;
      width: 85%;
      border-radius: 8px;
      object-fit: contain;
      display: none;
    }
  }
  & > div:nth-child(4) {
    display: flex;
    align-items: center;
    margin-top: 34px;
    button {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      color: ${(props) => props.theme.brandColor};
      svg {
        margin-left: 7.17px;
        margin-right: 5px;
        font-size: 2rem;
      }
    }
    @media (min-width: 700px) {
      margin-left: 54.5px;
    }
  }
  @media (min-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const UploadImgButton = styled(PhotoButton)`
  label {
    color: ${(props) => props.theme.brandColor};
  }
`;

const TweetButton = styled(GeneralButton)`
  position: absolute;
  right: 11.9px;
  bottom: 12px;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  @media (min-width: 700px) {
    right: 19px;
  }
`;

export {MakePostContainer, UploadImgButton, TweetButton};
