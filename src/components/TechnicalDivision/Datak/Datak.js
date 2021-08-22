import classes from './Datak.module.css'
import ProfileCard from '../ProfileCard/profileCard';
import { useSelector } from 'react-redux';

const Datak = (props) => {
  
  const datakCommanders = useSelector(
    state => state.profiles.filter((profile) =>
      profile.datak === props.id && profile.type === "penchief"
  ))

  const armamentTeamLeaders = useSelector((state) =>
    state.profiles.filter(
      (profile) =>
        profile.datak === props.id && profile.type === "armament team Leader"
    )
  );

  const mechanicsTeamLeaders = useSelector((state) =>
    state.profiles.filter(
      (profile) =>
        profile.datak === props.id && profile.type === "mechanics team leader"
    )
  );


  const technicians = useSelector((state) =>
    state.profiles.filter(
      (profile) => profile.datak === props.id && profile.type === "technician"
    )
  );

  console.log(datakCommanders)

  const mapProfilesHandler = (arr) => {
    return arr.map((profile) => <ProfileCard name={profile.name} />);
  }

  return (
    <div className={classes.datak}>
      <div className={classes.datakCommanders}>
        {mapProfilesHandler(datakCommanders)}
      </div>
      <div className={classes.subDatakCommanders}>
        <div className={classes.teamLeaders}>
          {mapProfilesHandler(armamentTeamLeaders)}
        </div>
        <div className={classes.teamLeaders}>
          {mapProfilesHandler(mechanicsTeamLeaders)}
        </div>
      </div>
      <div className={classes.technicians}>
        {mapProfilesHandler(technicians)}
      </div>
    </div>
  );
};

export default Datak;

/*

<div className={classes.subDatakCommanders}>
        <div className={classes.teamLeaders}>
          {mapProfilesHandler(armamentTeamLeaders)}
        </div>
        <div className={classes.teamLeaders}>
          {mapProfilesHandler(mechanicsTeamLeaders)}
        </div>
      </div>
      <div className={classes.technicians}>
        {mapProfilesHandler(technicians)}
      </div>

*/

/*

 <div className={classes.datak}>
      <div className={classes.datakCommanders}>
        <h1>penChief</h1>
        <h2>deputy penChief</h2>
      </div>
      <div className={classes.subDatakCommanders}>
        <div className={classes.teamLeaders}>
          <h3>1st Head of Aircraft Mechanic Team</h3>
          <h3>2st Head of Aircraft Mechanic Team</h3>
          <h3>3st Head of Aircraft Mechanic Team</h3>
        </div>
        <div className={classes.teamLeaders}>
          <h3>1st Head of Armament Team</h3>
          <h3>2st Head of Armament Team</h3>
          <h3>3st Head of Armament Team</h3>
        </div>
      </div>
      <div className={classes.technicians}>
        <h4>First Class Technician</h4>
        <h4>First Class Technician</h4>
        <h4>First Class Technician</h4>
        <h4>First Class Technician</h4>
      </div>
    </div>

*/
