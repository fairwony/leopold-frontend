import "./Editor.css";

// Require Editor CSS files.

import 'froala-editor/css/froala_style.min.css';

import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';


// Render Froala Editor component.

export default function EditorComponent (){

  

return (
  <div className="editor">
    <FroalaEditorComponent tag="textarea"/>
  </div>
);

}