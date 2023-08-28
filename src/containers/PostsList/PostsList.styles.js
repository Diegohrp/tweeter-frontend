import styled from 'styled-components';

const PostsListContainer = styled.section`
  justify-self: center;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 700px) {
    width: 50%;
    grid-column: 2 / 3;
  }
`;

export {PostsListContainer};
