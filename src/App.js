
import './App.css';
import Editor from "./Components/Editor"
import Preview from "./Components/Preview"
import React from "react"
//import { marked } from 'marked';

function App() {
  

  const [markdown,setMarkdown] = React.useState("hey")
  function handle(val) {
    setMarkdown(val);
  }
  
  return (
    <div className="App">
    <div className="container">
    <div className="row">
    <div className="col-9 col-xl-5 col-lg-5 .col-md-9 .col-sm-9
    .col-10 edi">
      <Editor markdown={markdown} handle={handle}/>
    </div>
     <div className="col-11 col-xl-5 col-lg-5 .col-md-9 .col-sm-10
    .col-11">
      <Preview markdown={markdown}/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
