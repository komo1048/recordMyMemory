import { useState } from "react";
import Backdrop from "./Backdrop";
import classes from "./Card.module.css";
import MemoryCard from "./MemoryCard";

const Card = ({ memory, deleteMemory }) => {
  const [openCard, setOpenCard] = useState(false);
  const onOpenCard = () => {
    setOpenCard((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.card} onClick={onOpenCard}>
        <span className={classes.img}>
          <img src={memory.image} alt="" />
        </span>
      </div>
      {openCard && (
        <div className={classes.memoryCardContainer}>
          <MemoryCard
            viewMemory={memory}
            isOpen={openCard}
            onRequestClose={onOpenCard}
            deleteMemory={deleteMemory}
          />
          <Backdrop onClick={onOpenCard} />
        </div>
      )}
    </>
  );
};

export default Card;
