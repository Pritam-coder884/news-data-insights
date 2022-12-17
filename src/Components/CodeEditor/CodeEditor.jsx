import React, { useState } from "react";
// import { Controlled as CodeMirror } from "react-codemirror2";
//  import { UnControlled as CodeMirror } from "react-codemirror2";
import Editor from "@monaco-editor/react";

function CodeEditor({ width, value, dark,height }) {
  //let [value, setValue] = useState();
  return (
    <Editor
      height={height}
      width={width}
      //defaultLanguage="javascript"
      language="json"
      value={JSON.stringify(value, null, 2)}
      options={{ readOnly: true }}
      theme={ "vs-dark"}
    />
  );
}

export default CodeEditor;
