import e from "cors";
import React, { useState } from "react";

const ZoomComponent = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState('');
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");
  const [zoomState, setZoomState] = useState({
      xPos: 0,
      yPos: 0,
      zPos: 0,
      zoomValue: 1
  });

  

  
  const handle_gaf_ViewModeChange = () => {
    //this.setState({ CurrentViewMode: this.viewModes.gaf });
    setZoomState((prevState) => {
      return { ...prevState, Zpos: 50 };
    });
  };

  

  const resize = (e) => {
    console.log(e);
   
    const wheelDelta = e.deltaY;
    const resizeValue = -wheelDelta * 0.0007 + zoomState.zoomValue;

    if (resizeValue < 1.01 && resizeValue > 0.058) {
      setZoomState((prevState) => {
        return { ...prevState, zoomValue: resizeValue };
      });
    }
  }

    return (
      <div
        onWheel={(e) => resize(e)}
        on
        style={{ transform: `scale(${zoomState.zoomValue})` }}
      >
        {props.children}
      </div>
    );

}
export default ZoomComponent;




/*

class ZoomComponent extends Component {
  state = {
    CurrentViewMode: this.viewModes,
    viewModes: ["gaf", "profile"],
    xPos: 0,
    yPos: 0,
    zPos: 0,
    location3D: `translate3d(${this.xPos}px, ${this.yPos}px, ${this.Zpos}px)`,
    zoomValue: 1,
  };

  myRef = React.createRef();

  handle_gaf_ViewModeChange = () => {
    //this.setState({ CurrentViewMode: this.viewModes.gaf });
    this.setState({ Zpos: 50 });
  };

  resize = (e) => {
    console.log("onWheel event is active");
    const wheelDelta = e.deltaY;
    const resizeValue = -wheelDelta * 0.0007 + this.state.zoomValue;

    if (resizeValue < 1.01 && resizeValue > 0.08) {
      this.setState({ zoomValue: resizeValue });
    }
  };

  render = () => {
    return (
      <div
        onWheel={(e) => this.resize(e)}
        ref={this.myRef}
        style={{ transform: `scale(${this.state.zoomValue})` }}
      >
        {this.props.children}
      </div>
    );
  };
}


*/