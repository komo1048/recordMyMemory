import { useContext } from "react";
import { Link } from "react-router-dom";
import RecordContext from "../context/record-context";
import classes from "./Header.module.css";

const Header = () => {
  const recordCtx = useContext(RecordContext);

  const logoutHandler = () => {
    recordCtx.logoutHandler();
  };

  return (
    <div className={classes.header}>
      <Link to="/main">메인페이지</Link>
      <Link to="/myProfile">마이페이지</Link>
      {recordCtx.isLogin && <Link onClick={logoutHandler}>로그아웃</Link>}
      {!recordCtx.isLogin && <Link to="/login">로그인페이지</Link>}
    </div>
  );
};

export default Header;
