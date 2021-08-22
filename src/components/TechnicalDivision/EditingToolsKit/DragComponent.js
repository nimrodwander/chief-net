import React, {useState} from "react";
import classes from './DragComponent.module.css'
const DragComponent = (props) => {
  const [dragParameters, setDragParameters] = useState({
      activeDrag: false,
        newPosX: null,
        newPosY: null,
        initialX: null,
        initialY: null,
        deltaX: null, //do not use untill basic version works
        deltaY: null, //do not use untill basic version works
    });
  
  const dragStart = (e) => {
    //1. get and set the initioal position where the drag started
    //1.1. set active dragging to true
    setDragParameters((prevState) => {
      return {
        ...prevState,
        initialX: e.screenX - dragParameters.deltaX,
        initialY: e.screenY - dragParameters.deltaY,
        activeDrag: true,
      };
    });
  };

  const drag = (e) => {
    if (dragParameters.activeDrag === true) {
      e.preventDefault();

      //1. calculate mouse delta movement
      setDragParameters((prevState) => {
        return {
          ...prevState,
          deltaX: e.screenX - dragParameters.initialX,
          deltaY: e.screenY - dragParameters.initialY,
        };
      });
    }
  };

  const dragEnd = (e) => {
    //this.state.activeDrag = false; //check why set state does not work?? change to set state
    //console.log("is active?", this.activeDrag);
    setDragParameters((prevState) => {
      return {
        ...prevState,
        activeDrag: false
      };
    });
      
    };

    return (
      <div
        style={{
          transform: `translate(${dragParameters.deltaX}px, ${dragParameters.deltaY}px)`,
        }}
        className={classes.dragComponent}
        onMouseDown={(e) => dragStart(e)}
        onMouseMove={(e) => drag(e)}
        onMouseUp={(e) => dragEnd(e)}
      >
        {props.children}
      </div>
    );
}


export default DragComponent;