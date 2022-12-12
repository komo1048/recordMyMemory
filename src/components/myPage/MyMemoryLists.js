import classes from "./Profile.module.css";

const MyMemoryLists = ({ index, myMemoryList, deleteMemory }) => {
  const onDeleteMemory = () => {
    deleteMemory(myMemoryList.id);
  };

  return (
    <>
      <div className={classes.myCards}>
        <span>{index + 1}</span> | <span>{myMemoryList.title}</span> | <>{myMemoryList.content}</>
      </div>
      <button className={classes.myCardDeleteBtn} onClick={onDeleteMemory}>
        x
      </button>
    </>
  );
};

export default MyMemoryLists;
