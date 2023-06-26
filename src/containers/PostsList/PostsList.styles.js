import styled from 'styled-components';

const PostsListContainer = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

export {PostsListContainer};
