import React, { useState } from "react";
import Datak from "./Datak/Datak.js";
import classes from "./TechnicalDivision.module.css";
import Department from "./Department/Department.js";

const TechnicalDivision = (props) => {
  return (
    <div className={classes.ProfileCardsDOM}>
          <div className={classes.technicalOfficer}>
            <h1>Technical Officer</h1>
          </div>
          <div className={classes.departments}>
            <Department />
            <Department />
            <Department />
          </div>
          <div className={classes.dataks}>
            <Datak />
            <Datak />
            <Datak />
          </div>
    </div>
  );
};

export default TechnicalDivision;

/*
<ProfileCard
            fullname= {"שם מלא"}
            role= {"תפקיד"}
            status= {"סטטוס"}
            personalID= {"מ.א"}
            city= {"עיר"}
            dischargeDate= {"ת. שחרור"} 
            readMode={this.props.readMode}
            leftBtnClickHandler={() => this.addProfileCardHandler()}
          />

*/

/*

class ProfileCardsDOM extends Component {
  state = {
    profiles: [
      {
        fullname: "שם מלא",
        role: "תפקיד",
        status: "סטטוס",
        personalID: "מ.א",
        city: "עיר",
        dischargeDate: "ת. שחרור",
      },
    ],

    placeHolderProfile: {
      fullname: "שם מלא",
      role: "תפקיד",
      status: "סטטוס",
      personalID: "מ.א",
      city: "עיר",
      dischargeDate: "ת. שחרור",
    },
  };

  addProfileCardHandler() {
    //console.log("addProfileCardHandler [profileCardsDOM.js]");
    //check if it does work
    //this.state.profiles.push(this.state.placeHolderProfile);
    console.log(this.state.profiles);
    this.setState({
      profiles: this.state.profiles.push(this.state.placeHolderProfile),
    });
    console.log(this.mapProfiles());

    //return this.state.profiles.map((profile) => );
  }

  mapProfiles() {
    return this.state.profiles.map((profile) => {
      return (
        <ProfileCard
          fullname={"profile.fullname"}
          role={"profile.role"}
          status={"profile.status"}
          personalID={"profile.personalID"}
          city="profile.city"
          dischargeDate={"profile.dischargeDate"}
          readMode={this.props.readMode}
          clickHandler={() => this.addProfileCardHandler()}
        />
      );
    });
  }

  render() {
    return (
      <DragComponent>
        <ZoomComponent>
          <ProfileCard
            fullname={"profile.fullname"}
            role={"profile.role"}
            status={"profile.status"}
            personalID={"profile.personalID"}
            city="profile.city"
            dischargeDate={"profile.dischargeDate"}
            readMode={this.props.readMode}
            clickHandler={() => this.addProfileCardHandler()}
          />
        </ZoomComponent>
      </DragComponent>
    );
  }
}


*/
