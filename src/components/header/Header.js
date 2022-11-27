import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/main">메인페이지</Link>
      <Link to="/">로그인페이지</Link>
    </div>
  );
};

export default Header;
