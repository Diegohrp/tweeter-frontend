import styled from 'styled-components';

const ErrorLabel = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.errorColor};
  font-weight: 500;
`;

export {ErrorLabel};
