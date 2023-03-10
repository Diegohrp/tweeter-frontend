import styled from 'styled-components';

const CommentContainer = styled.section`
  width: 100%;
  padding: 10px 20px 0 20px;
  display: flex;
  align-items: flex-start;
`;

const CommentContentContainer = styled.div`
  width: 100%;
  margin-left: 16px;
`;

const CommentPrompt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
    @media (max-width: 290px) {
      font-size: 1.2rem;
      left: 8px;
    }
  }
`;

const SendButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 12px 8px 0px;
  color: ${(props) => props.theme.primaryText};
  &:disabled {
    color: ${(props) => props.theme.placeholderColor};
  }
`;

export {CommentContainer, CommentContentContainer, CommentPrompt, SendButton};
