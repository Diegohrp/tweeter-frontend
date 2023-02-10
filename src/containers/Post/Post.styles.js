import styled from 'styled-components';

const PostContainer = styled.section`
  width: 100%;
  min-height: 155px;
  margin-bottom: 24px;
  padding-bottom: 25px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.cards};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export {PostContainer};
