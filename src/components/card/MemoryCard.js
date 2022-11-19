import classes from "./MemoryCard.module.css";

const MemoryCard = ({ viewMemory, onRequestClose, deleteMemory }) => {
  const onMemoryCardDelete = () => {
    onRequestClose();
    deleteMemory(viewMemory.date);
  };
  return (
    <div onRequestClose={onRequestClose} className={classes.container}>
      <button className={classes.deleteBtn} onClick={onMemoryCardDelete}>
        삭제
      </button>
      <div>
        {viewMemory.title} / {viewMemory.date}
      </div>
      <div>
        <img src={viewMemory.image} alt="" />
      </div>
      <div>{viewMemory.content}</div>
    </div>
  );
};

export default MemoryCard;
