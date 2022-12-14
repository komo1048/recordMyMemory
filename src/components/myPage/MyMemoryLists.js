import { useState } from "react";
import Backdrop from "../card/Backdrop";
import MemoryCard from "../card/MemoryCard";

import classes from "./MyMemoryLists.module.css";

const MyMemoryLists = ({ index, myMemoryList, deleteMemory }) => {
  const onDeleteMemory = () => {
    deleteMemory(myMemoryList.id);
  };

  const [openCard, setOpenCard] = useState(false);

  const onOpenCard = () => {
    setOpenCard(prevState => !prevState);
  };

  const cssClasses = [classes.memoryCardContainer, openCard ? classes.memoryCardContainerOpen : classes.memoryCardContainerClose];

  return (
    <>
      <div className={`${classes.myCards} ${classes.myCardsDiv}`} onClick={onOpenCard}>
        <span>{index + 1}</span> | <span>{myMemoryList.title}</span> | <>{myMemoryList.content}</>
      </div>
      <button className={`${classes.myCardDeleteBtn} ${classes.myCardBtn}`} onClick={onDeleteMemory}>
        삭제
      </button>
      {openCard && (
        <div className={cssClasses.join(" ")}>
          <MemoryCard viewMemory={myMemoryList} deleteMemory={onDeleteMemory} onRequestClose={onOpenCard} />
          <Backdrop onClick={onOpenCard} isOpenCard={openCard} />
        </div>
      )}
    </>
  );
};

export default MyMemoryLists;
