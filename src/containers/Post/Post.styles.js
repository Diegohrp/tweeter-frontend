import styled from 'styled-components';

const PostContainer = styled.section`
  margin: 0px auto;
  width: min(95%, 745px);
  padding-bottom: 25px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.cards};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export {PostContainer};
