import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(105vh - 68.3px - 68.3px);
  overflow-y: scroll;

  .loader {
    position: relative;
    margin: 0 auto;
    width: 40px;
  }

  @media (min-width: 700px) {
    margin-top: 20px;
    height: calc(100vh - 90px);
    align-items: flex-start;
    section {
      width: 86.61%;
      align-items: center;
    }
  }
`;

export {Section};
