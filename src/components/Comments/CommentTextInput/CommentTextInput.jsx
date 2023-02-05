import React from 'react';
import Editor, {createEditorStateWithText} from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';

import editorStyles from './editorStyles.module.css';

const hashTagPlugin = createHashtagPlugin();
const plugins = [hashTagPlugin];
const text = '';

function CommentTextInput({editorRef, onFocus, onKeyDown, onChangeComment}) {
  const [editor, setEditor] = React.useState(createEditorStateWithText(text));

  const onChange = (editorState) => {
    const curretContent = editor.getCurrentContent().getPlainText();
    const nextContent = editorState.getCurrentContent().getPlainText();
    if (curretContent != nextContent) {
      onChangeComment(nextContent);
    }
    setEditor(editorState);
  };

  return (
    <div
      className={editorStyles.editor}
      onFocus={onFocus}
      onKeyDown={onKeyDown}>
      <Editor
        onChange={onChange}
        editorState={editor}
        plugins={plugins}
        ref={editorRef}
      />
    </div>
  );
}

export {CommentTextInput};
