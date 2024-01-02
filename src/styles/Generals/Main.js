import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  display: grid;
  height: calc(100vh - 68.3px - 68.3px);
  margin-top: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 74px 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 80px 1fr;
    height: calc(100vh - 68.3px);
    justify-items: flex-start;
    align-items: flex-start;
    section {
      width: 86.61%;
      align-items: center;
    }
  }
`;

export {Main};
