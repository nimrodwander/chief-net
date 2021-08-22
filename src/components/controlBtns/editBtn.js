//import React, { Component } from "react";
import Classes from "./controlBtns.module.css";
import editIcon from "../../public/editIcon.svg";


const EditBtn = (props) => {
  return (
    <button className={Classes.editBtn} onClick={props.btnClickFunc}>
      <img
        src={editIcon}
        alt={"Edit"}
        style={{ width: `45%`, height: `auto`}}
      />
    </button>
  );
}

export default EditBtn;
