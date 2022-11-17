import { useState } from "react";
import Backdrop from "./Backdrop";
import classes from "./Card.module.css";
import MemoryCard from "./MemoryCard";
const Card = ({ memory }) => {
  const [openCard, setOpenCard] = useState(false);
  const onOpenCard = () => {
    console.log("open the card");
    setOpenCard((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.card}>
        <p onClick={onOpenCard}>이미지</p>
      </div>
      {openCard && (
        <>
          <MemoryCard
            viewMemory={memory}
            isOpen={openCard}
            onRequestClose={onOpenCard}
          />
          <Backdrop onClick={onOpenCard} />
        </>
      )}
    </>
  );
};

export default Card;
