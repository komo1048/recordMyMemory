import classes from "./MemoryCard.module.css";

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick} />;
};

export default Backdrop;
