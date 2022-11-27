import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.inputBox}>
          <h3>로그인</h3>
          <input type="text" className={classes.id} placeholder="아이디" />
          <input type="password" className={classes.password} placeholder="비밀번호" />
          <button className={classes.loginBtn}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
