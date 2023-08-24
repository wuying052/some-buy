import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

const BookDetail = (props) => {
  const mdParser = new MarkdownIt();

  const [mdtext, setMdtext] = useState("# Hello")
  
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange1', html)
    console.log('handleEditorChange2', text)
    setMdtext(text)
  }
  function submit(){
    console.log(mdtext);
  }
  return (
    <>
      <MdEditor
        value={mdtext}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <button onClick={submit}>保存</button>
    </>
  )
}

export default BookDetail