import classes from "./Join.module.css";

const Join = () => {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <div className={classes.joinBox}>
          <h3>회원가입</h3>
          <input type="text" className={classes.id} placeholder="아이디" />
          <input type="password" className={classes.password} placeholder="비밀번호" />
          <input type="password" className={classes.password} placeholder="비밀번호확인" />
          <button className={classes.joinBtn}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
