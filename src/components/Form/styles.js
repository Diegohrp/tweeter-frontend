import styled from 'styled-components';
import {titleFont} from '../../styles/GlobalStyles';

const StyledForm = styled.form`
  width: min(80%, 500px);
  height: 300px;
  background-color: ${(props) => props.theme.cards};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  .title {
    width: 100%;
    padding: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 100px;
      margin-bottom: 5px;
    }
    h2 {
      font-family: ${titleFont};
      font-size: 1.8rem;
      margin-bottom: 2px;
    }
    span {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
  .fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      height: 30px;
      width: 80%;
      margin-bottom: 10px;
      border: 1px solid ${(props) => props.theme.borders};
      border-radius: 5px;

      svg {
        margin-left: 10px;
        color: ${(props) => props.theme.secondaryText};
        font-size: 1.2rem;
      }

      input {
        height: 25px;
        width: 80%;
        outline: none;
        border: none;
        margin-left: 10px;
      }
    }
  }
`;

export {StyledForm};
