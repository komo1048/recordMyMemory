import classes from "./Card.module.css";
const Card = ({ memory }) => {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        {memory.title} / {memory.date}
      </div>
      <p>이미지</p>

      <span>{memory.content}</span>
    </div>
  );
};

export default Card;
