import CreateButton from "./components/createButton/CreateButton";
import Card from "./components/card/Card";
import classes from "./components/container/container.module.css";
import Modal from "react-modal";
import { useState } from "react";

function App() {
  const [memoryList, setMemoryList] = useState([]);

  const onAddMemory = (item) => {
    setMemoryList((prevMemory) => {
      return [...prevMemory, { ...item }];
    });
  };

  const onDeleteMemory = (memoryId) => {
    console.log(memoryId);
    setMemoryList((prevMemory) => {
      return prevMemory.filter((item) => item.id !== memoryId);
    });
  };
  return (
    <div className={classes.box}>
      <CreateButton onAddMemory={onAddMemory} className={classes.creatBtn} />
      <div className={classes.container}>
        {memoryList.map((memory) => {
          return (
            <Card
              key={memory.date}
              id={memory.date}
              memory={memory}
              deleteMemory={onDeleteMemory}
            />
          );
        })}
      </div>
    </div>
  );
}
Modal.setAppElement("#root");
export default App;
