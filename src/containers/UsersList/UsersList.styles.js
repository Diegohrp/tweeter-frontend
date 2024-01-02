import styled from 'styled-components';
import {PostsListContainer} from '../PostsList/PostsList.styles';
import {textFont} from '../../styles/GlobalStyles';
import {GeneralButton} from '../../styles/Generals/Button.styles';

const Container = styled(PostsListContainer)`
  align-items: center;
`;

const List = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.cards};
  padding: 10px 10px 0px 10px;
  border-radius: 5px;
`;

const UserCard = styled.article`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.borders};
  div {
    display: flex;
    align-items: center;

    div {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      p {
        font-size: 1.2rem;
        font-family: ${textFont};
        color: ${(props) => props.theme.secondaryText};
      }
      p:first-child {
        font-weight: bold;
        font-size: 1.3rem;
        color: ${(props) => props.theme.primaryText};
      }
    }
  }
`;

const FollowButton = styled(GeneralButton)`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

export {Container, List, UserCard, FollowButton};
