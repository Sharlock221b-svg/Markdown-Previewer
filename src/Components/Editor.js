import React from "react"

export default function Editor(Props){
   
   return (
     <div>
      <div className="edi-head">
      <p>Editor</p>
     </div>
     
     <textarea id="editor" className="editor" value={Props.markdown} 
     onChange= 
    {(event) => { Props.handle(event.target.value)
     }}
       > 
      {""}{console.log(Props.markdown)} 
     </textarea>
     
     </div>
  )
}