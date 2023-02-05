import styled from 'styled-components';

const ListContainer = styled.section`
  width: 100%;
  padding: 0 20px;
  margin-top: 9px;
  background-color: ${(props) => props.theme.cards};
  article:first-child {
    border-top: 1px solid ${(props) => props.theme.borders};
  }
`;

export {ListContainer};
