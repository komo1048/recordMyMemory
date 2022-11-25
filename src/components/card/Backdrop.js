import "./MemoryCard.module.css";

const Backdrop = ({ onClick, isOpenCard }) => {
  const cssClasses = [
    "backdrop",
    isOpenCard ? "backdropOpen" : "backdropClose",
  ];
  return <div className={cssClasses.join(" ")} onClick={onClick} />;
};

export default Backdrop;
