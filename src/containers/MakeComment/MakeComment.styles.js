import styled from 'styled-components';

const CommentContainer = styled.section`
  margin: 20px auto;
  width: min(95%, 745px);
  min-height: 69px;
  height: auto;
  padding: 9.3px 20px 19px 20px;
  display: flex;
  align-items: flex-start;
  border-radius: 0 0 8px 8px;
  background-color: ${(props) => props.theme.cards};
`;

const CommentPrompt = styled.div`
  width: 90%;
  margin-left: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.comments};
  position: relative;
  #comment-placeholder {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 1.4rem;
    color: ${(props) => props.theme.placeholderColor};
  }
`;

export {CommentContainer, CommentPrompt};
