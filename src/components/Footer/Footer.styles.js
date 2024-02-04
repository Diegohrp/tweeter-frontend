import styled from 'styled-components';

const StyledFooter = styled.footer`
  visibility: hidden;
  @media (min-width: 700px) {
    visibility: visible;
    font-size: 1.6rem;
    position: absolute;
    bottom: 15px;
    left: calc(12.5% - 100px);
    color: ${(props) => props.theme.secondaryText};
    a {
      color: ${(props) => props.theme.brandColor};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export {StyledFooter};
