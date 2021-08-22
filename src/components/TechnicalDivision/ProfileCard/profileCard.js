import { Component } from "react";
import React, { useState } from "react";
import Classes from "./profileCard.module.css";

const ProfileCard = (props) => {

  const readModeProfileJSX = <div className={Classes.profileCard}>
            <div className={Classes.rightDiv}>
              <div className={Classes.profileImageDiv}>
                <img src={"#"} />
              </div>
              <div className={Classes.nameDiv}>
                <h2>{props.name}</h2>
              </div>
              <h3>{props.role}</h3>
            </div>
            <div className={Classes.leftDiv}>
              <h4>{`תפקיד: ${props.status}`}</h4>
              <h4>{`מ.א: ${props.personalID}`}</h4>
              <h4>{`עיר: ${props.city}`}</h4>
              <h4>{`ת. שחרור: ${props.dischargeDate}`}</h4>
            </div>
  </div>

  
    return (
      <div>
        {readModeProfileJSX}
      </div>
    );
};

export default ProfileCard;

/*
const [mouseEnter, setMouseEnter] = useState(false);

  const mouseEnterHandler_edit = () => {
        setMouseEnter(true);

  }

  const mouseLeaveHandler_edit = () => {
    setMouseEnter(false);
  };

{
  mouseEnter ? (
              <div>
                <button
                  onClick={props.topBtnClickHandler}
                  className={Classes.topBtn}
                >
                  -
                </button>
                <button
                  onClick={props.rightBtnClickHandler}
                  className={Classes.rightBtn}
                >
                  +
                </button>
                <button
                  onClick={props.bottomBtnClickHandler}
                  className={Classes.bottomBtn}
                >
                  +
                </button>
                <button
                  onClick={props.leftBtnClickHandler}
                  className={Classes.leftBtn}
                >
                  +
                </button>
              </div>
            ) : null}
*/



/*

const EditModeProfileJSX = <React.Fragment className={Classes.profileCard}>
           
            <div className={Classes.rightDiv}>
              <div className={Classes.profileImageDiv}>
                <input id="" type="image" placeholder="הוסף תמונה"></input>
              </div>

              <input
                className={Classes.profileDataInput}
                type="text"
                placeholder="שם מלא"
              ></input>
              <input
                className={Classes.profileDataInput}
                type="text"
                placeholder="תפקיד"
              ></input>
            </div>
            <div className={Classes.leftDiv}>
              <input
                className={Classes.profileDataInput}
                type="text"
                placeholder="סטטוס"
              ></input>
              <input
                className={Classes.profileDataInput}
                type="text"
                placeholder="מ.א"
              ></input>
              <input
                className={Classes.profileDataInput}
                type="text"
                placeholder="עיר"
              ></input>
              <input
                className={Classes.profileDataInput}
                type="date"
                placeholder="תץ שחרור"
              ></input>
            </div>
          </React.Fragment>
  

*/