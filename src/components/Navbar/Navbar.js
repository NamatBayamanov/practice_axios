import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
function Navbar() {
  return (
    <nav>
      <div className={classes.Navbar}>
        <Link to="/create">Create owner post!</Link>
      </div>
    </nav>
  );
}

export default Navbar;
