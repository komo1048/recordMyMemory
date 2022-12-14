import { useState } from "react";
import Backdrop from "./Backdrop";
import classes from "./Card.module.css";
import MemoryCard from "./MemoryCard";

const Card = ({ memory, deleteMemory, upDateMemory }) => {
  const [openCard, setOpenCard] = useState(false);
  const onOpenCard = () => {
    setOpenCard((prevState) => !prevState);
  };

  const cssClasses = [
    classes.memoryCardContainer,
    openCard
      ? classes.memoryCardContainerOpen
      : classes.memoryCardContainerClose,
  ];

  return (
    <>
      <div className={classes.card} onClick={onOpenCard}>
        <span className={classes.img}>
          <img src={memory.image} alt="" />
        </span>
      </div>
      {openCard && (
        <div className={cssClasses.join(" ")}>
          <MemoryCard
            viewMemory={memory}
            isOpen={openCard}
            onRequestClose={onOpenCard}
            deleteMemory={deleteMemory}
            upDateMemory={upDateMemory}
          />
          <Backdrop onClick={onOpenCard} isOpenCard={openCard} />
        </div>
      )}
    </>
  );
};

export default Card;
