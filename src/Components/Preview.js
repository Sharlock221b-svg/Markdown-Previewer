import React from "react"
import {marked} from "marked"

export default function Preview(Props){

    const getMarkdownText = () => {
      marked.setOptions({
      breaks: true
    })
    const rawMarkup = marked(Props.markdown, { sanitize: true   });
    return { __html: rawMarkup };
    };


  return (
    <div  >
    <div className="pre">
      <p>Preview</p>
     </div>
    <div id="preview"  className="preview" dangerouslySetInnerHTML={ 
    getMarkdownText()}
    />
    </div>
  )
}