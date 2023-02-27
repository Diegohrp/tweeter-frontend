import styled from 'styled-components';
import {textFont} from '../../styles/GlobalStyles';

const ListContainer = styled.section`
  width: 100%;
  padding: 0 20px;
  margin-top: 9px;
  background-color: ${(props) => props.theme.cards};
  article:first-child {
    border-top: 1px solid ${(props) => props.theme.borders};
  }
`;

const LoadMoreButton = styled.button`
  /* width: max(30%, 150px); */
  margin-top: 20px;
  padding: 0 10px;
  height: 25px;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  font-family: ${textFont};
  color: ${(props) => props.theme.secondaryText};

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primaryText};
    background-color: ${(props) => props.theme.background};
  }
`;

export {ListContainer, LoadMoreButton};
