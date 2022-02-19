
import './App.css';
import Editor from "./Components/Editor"
import Preview from "./Components/Preview"


function App() {
  
  return (
    <div className="App">
    <div className="container">
    <div className="row">
    <div className="col-9 col-xl-5 col-lg-5 .col-md-9 .col-sm-9
    .col-10 edi">
      <Editor />
    </div>
     <div className="col-11 col-xl-5 col-lg-5 .col-md-9 .col-sm-10
    .col-11">
      <Preview />
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
