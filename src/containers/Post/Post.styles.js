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

const Retweeted = styled.div`
  margin-bottom: 10px;
  margin-left: 5px;
  a {
    height: 20px;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.secondaryText};
    text-decoration: none;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.8rem;
      margin-right: 2px;
    }
  }
`;

export {PostContainer, Retweeted};
