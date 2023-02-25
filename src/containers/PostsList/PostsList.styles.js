import styled from 'styled-components';

const PostsListContainer = styled.section`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

export {PostsListContainer};
