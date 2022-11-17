import classes from "./MemoryCard.module.css";

const MemoryCard = ({ viewMemory, onRequestClose }) => {
  return (
    <div onRequestClose={onRequestClose} className={classes.container}>
      <div>
        {viewMemory.title} / {viewMemory.date}
      </div>
      <p>이미지</p>
      <div>{viewMemory.content}</div>
    </div>
  );
};

export default MemoryCard;
