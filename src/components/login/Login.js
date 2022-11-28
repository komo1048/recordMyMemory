import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RecordContext from "../context/record-context";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const idInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  const recordCtx = useContext(RecordContext);

  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlDrx7XqvhriNau6Bp6169ejBtLPJvycw", {
      method: "POST",
      body: JSON.stringify({
        email: idInputRef.current.value,
        password: passwordInputRef.current.value,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => {
        setIsLoading(false);
        if (res.ok) {
          navigate("/main");
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = "로그인에 실패 했습니다. 입력 값을 다시 확인해 주세요.";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            alert(errorMessage);
          });
        }
      })
      .then(data => {
        recordCtx.loginHandler(data.idToken);
      });
  };

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <form className={classes.loginForm} onSubmit={submitHandler}>
          <h3>로그인</h3>
          <input type="text" className={classes.id} placeholder="아이디" ref={idInputRef} />
          <input type="password" className={classes.password} placeholder="비밀번호" ref={passwordInputRef} />

          <button type="submit" className={classes.loginBtn}>
            {isLoading ? "로그인 확인 중 입니다..." : "로그인"}
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
