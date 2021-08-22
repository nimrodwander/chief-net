import Classes from "./navbar.module.css";
import CheifNetLogo from '../../public/chiefNetLogo.svg';
import hamburgerMenuIcon from "../../public/hamburgerMenuIcon.svg";
import dummyProfileImage from "../../public/dummyProfileImage.png";

const Navbar = (props) => {
  return (
    <header>
      {props.readMode === true ? (
        <div className={Classes.navbar}>
          <div>
            <image src={hamburgerMenuIcon} alt={"תפריט"} />
          </div>
          <div className={Classes.userDataDiv}>
            <image
              className={Classes.userImage}
              src={dummyProfileImage}
              alt={"תפריט"}
              width
            />
            <div className={Classes.NameRoleDiv}>
              <h4 className={Classes.userName}>נימרוד ונדר</h4>
              <h6 className={Classes.userRole}>מהנדס תוכנה</h6>
            </div>
          </div>
          <input
            className={Classes.profileSearch}
            name="profileSearch"
            type="text"
            placeholder="חיפוש פרופיל"
          />
          <div className={Classes.flowControlDivMenu}>
            <img src={CheifNetLogo} style={{ height: `60%`, width: `auto` }} />
          </div>
        </div>
      ) : props.readMode === false ? (
        <div className={Classes.navbar}>
          <div className={Classes.flowControlDivMenu}>
            <button
              className={Classes.saveButton}
              onClick={props.saveHandlerFunc}
            >
              שמור
            </button>
            <button
              className={Classes.cancelButton}
              onClick={props.cancelHandlerFunc}
            >
                בטל
            </button>
          </div>
          
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;

/*
 <button className={Classes.hamburgerMenuIcon}></button>
*/
            