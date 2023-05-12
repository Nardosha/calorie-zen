import React, { useState } from 'react';
import * as monaco from 'monaco-editor';
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { Editor, Monaco, loader } from '@monaco-editor/react';

const MonacoEditor = () => {
  const [editor, setEditor] = useState<Monaco | null>(null);
  // const editorRef = useRef(null);

  loader.config({ monaco });

  loader.init().then((mon: Monaco) => {
    setEditor(mon);
    console.log(editor);
  });

  return <Editor language="java" width={500} height={500} value="// hello" />;
};

export default MonacoEditor;
