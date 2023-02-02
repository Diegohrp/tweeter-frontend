import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 68.31px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 3rem;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.cards};
  a {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    div {
      position: absolute;
      width: 120px;
      height: 41.17px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      &:hover {
        background-color: ${(props) => props.theme.background};
      }
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export {NavBar};
