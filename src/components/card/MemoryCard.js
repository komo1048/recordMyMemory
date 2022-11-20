import classes from "./MemoryCard.module.css";

const MemoryCard = ({ viewMemory, onRequestClose, deleteMemory }) => {
  const onMemoryCardDelete = () => {
    onRequestClose();
    deleteMemory(viewMemory.id);
  };
  return (
    <div onRequestClose={onRequestClose} className={classes.container}>
      <button className={classes.deleteBtn} onClick={onMemoryCardDelete}>
        삭제
      </button>
      <div className={classes.title}>
        {viewMemory.title} / {viewMemory.date}
      </div>
      <div className={classes.image}>
        <img src={viewMemory.image} alt="" />
      </div>
      <div className={classes.content}>{viewMemory.content}</div>
    </div>
  );
};

export default MemoryCard;
