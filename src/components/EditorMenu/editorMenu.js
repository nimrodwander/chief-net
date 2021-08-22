//import React, { Children, Component } from "react";
import Classes from "./editorMenu.module.css";

const EditorMenu = (props) => {
  return (
    <div className={Classes.editorMenu}>
      <button onClick={props.addCardHandler} className={Classes.crtlBtn}>{"הוסף"}</button>
      <button onClick={props.dragCardHandler} className={Classes.crtlBtn}>{"גרור"}</button>
      <button onClick={props.deleteCardHandler} className={Classes.crtlBtn}>{"מחק"}</button>
    </div>
  );
};

export default EditorMenu;
