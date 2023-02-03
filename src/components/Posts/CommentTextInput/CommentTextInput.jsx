import React from 'react';
import Editor, {createEditorStateWithText} from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';

import editorStyles from './editorStyles.module.css';

const hashTagPlugin = createHashtagPlugin();
const plugins = [hashTagPlugin];
const text = '';

function CommentTextInput({editorRef, onFocus}) {
  const [editor, setEditor] = React.useState(createEditorStateWithText(text));
  console.log(editor.getCurrentContent().getPlainText());
  const onChange = (editorState) => {
    setEditor(editorState);
  };

  return (
    <div className={editorStyles.editor} onFocus={onFocus}>
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
