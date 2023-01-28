import React from 'react';

import createHashtagPlugin from '@draft-js-plugins/hashtag';
import Editor, {createEditorStateWithText} from '@draft-js-plugins/editor';
//Styles css modules
import editorStyles from './editorStyles.module.css';
import hashtagStyles from './hashtagStyles.module.css';

const hashtagPlugin = createHashtagPlugin({theme: hashtagStyles});
const plugins = [hashtagPlugin];

const text = '';

function PostTextInput({focusEditor, editorRef, onChangePostContent}) {
  const [editor, setEditor] = React.useState(createEditorStateWithText(text));

  const onChange = (eState) => {
    onChangePostContent(eState.getCurrentContent().getPlainText());
    setEditor(eState);
  };

  return (
    <div className={editorStyles.editor} onFocus={focusEditor}>
      <Editor
        ref={editorRef}
        editorState={editor}
        onChange={onChange}
        plugins={plugins}
      />
    </div>
  );
}

export {PostTextInput};
