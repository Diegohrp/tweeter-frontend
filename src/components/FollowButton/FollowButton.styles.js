import styled from 'styled-components';
import {GeneralButton} from '../../styles/Generals/Button.styles';

const FButton = styled(GeneralButton)`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

export {FButton};
