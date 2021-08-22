
import { useState } from "react";
import "./App.css";
import EditBtn from "./components/controlBtns/editBtn.js";
import Navbar from './components/navbar/navbar.js';
import TechnicalDivision from "./components/TechnicalDivision/TechnicalDivision";
import ZoomComponent from "./components/TechnicalDivision/EditingToolsKit/ZoomComponent";
import DragComponent from "./components/TechnicalDivision/EditingToolsKit/DragComponent";
import Datak from "./components/TechnicalDivision/Datak/Datak";

const App = () => {
  const [readMode, setReadMode] = useState(true)
  
  const clickHandler = () => {
    this.setState({ readMode: !this.state.readMode });
  };
  
    return (
      <div className="App">
        <Navbar
          readMode={readMode}
          saveHandlerFunc={clickHandler}
          cancelHandlerFunc={clickHandler}
        />
        <DragComponent>
         <ZoomComponent>
            <Datak readMode={readMode} id={4} />
        </ZoomComponent>
        </DragComponent>
        {readMode && <EditBtn btnClickFunc={clickHandler} />}
      </div>
    );
}
  


export default App;
