import classes from "./Department.module.css";
const Department = (props) => {
  return (
    <div className={classes.datak}>
      <div className={classes.datakCommanders}>
        <h1>penChief</h1>
        <h2>deputy penChief</h2>
      </div>
      <div className={classes.technicians}>
        <h4>department man</h4>
        <h4>department man</h4>
        <h4>department man</h4>
        <h4>department man</h4>
      </div>
    </div>
  );
};

export default Department;
