import styled from 'styled-components';

const GeneralButton = styled.button`
  width: 81px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.brandColor};
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;

export {GeneralButton};
