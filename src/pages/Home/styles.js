import styled from 'styled-components';

const Main = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 68.3px - 68.3px);

  .loader {
    position: relative;
    margin: 0 auto;
    width: 40px;
  }

  @media (min-width: 700px) {
    height: calc(100vh - 70px);
  }
`;

export {Main};
