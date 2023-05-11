import React, {useRef, useState, useEffect} from 'react';
import './Editor.css';
import * as monaco from 'monaco-editor'

// import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

function Editor() {
    const [editor, setEditor] = useState(null);
    const monacoEl = useRef(null);

    useEffect(() => {
        if (monacoEl) {
            setEditor((editor) => {
                if (editor) return editor;

                return monaco.editor.create(monacoEl.current, {
                    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
                    language: 'javascript'
                });
            });
        }

        return () => editor?.dispose();
    }, [monacoEl.current]);

    return (
        <div className="App">
          <span>Hello!</span>
            <div className="Editor" ref={monacoEl}></div>
        </div>
    )
}

export default Editor