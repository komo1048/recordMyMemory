import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Join.module.css";

const Join = () => {
  const idInputRef = useRef("");
  const passwordInputRef = useRef("");

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    // validation check 생략 추후 추가

    //isLogin 검사
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlDrx7XqvhriNau6Bp6169ejBtLPJvycw", {
      method: "POST",
      body: JSON.stringify({ email: enteredId, password: enteredPassword, returnSecureToken: true }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      setIsLoading(false);
      if (res.ok) {
        //...
      } else {
        return res.json().then(data => {
          let errorMessage = "회원가입에 실패 했습니다. 입력 값을 다시 확인해 주세요.";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          alert(errorMessage);
        });
      }
    });
  };

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <form className={classes.joinForm} onSubmit={submitHandler}>
          <h3>회원가입</h3>
          <input type="text" className={classes.id} placeholder="아이디" ref={idInputRef} required />
          <input type="password" className={classes.password} placeholder="비밀번호(6자리 이상 입력해 주세요)" ref={passwordInputRef} required />
          <input type="password" className={classes.password} placeholder="비밀번호확인" />
          {!isLoading && (
            <button type="submit" className={classes.joinBtn}>
              회원가입
            </button>
          )}
          {isLoading && <p>회원가입 확인중 입니다...</p>}
        </form>
        <Link to="/login" className={classes.loginRedirect}>
          로그인페이지
        </Link>
      </div>
    </div>
  );
};

export default Join;
