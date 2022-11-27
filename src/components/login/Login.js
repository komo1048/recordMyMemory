import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <form className={classes.loginForm}>
          <h3>로그인</h3>
          <input type="text" className={classes.id} placeholder="아이디" />
          <input type="password" className={classes.password} placeholder="비밀번호" />
          <button type="button" className={classes.loginBtn}>
            로그인
          </button>
        </form>
        <Link to="/join" className={classes.joinRedirect}>
          회원가입페이지
        </Link>
      </div>
    </div>
  );
};

export default Login;
