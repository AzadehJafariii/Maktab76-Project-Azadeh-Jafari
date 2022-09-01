import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CkEditor extends Component {
  // const [description, setDescription] = useState("");

  render() {
    return (
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data="<p>{item.description}</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </div>
    );
  }
}

export default CkEditor;
