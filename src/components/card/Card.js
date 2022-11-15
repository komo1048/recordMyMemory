import classes from "./Card.module.css";
const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>제목 / 날짜</div>
      <p>이미지</p>

      <span>내용</span>
    </div>
  );
};

export default Card;
